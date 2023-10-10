import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as _ from 'lodash';
import { ListingDto } from '@infrastructure/common/pagination/dto';

@Injectable()
export class RepositoryProvider {
  constructor(private readonly prisma: PrismaService) {}

  async findMany<T>(
    tableName: string,
    model: any,
    params: ListingDto,
    andWhere?: Partial<T>,
  ) {
    const allFields = (await this.prisma.getTableFields(tableName)).map(
      (el) => el.column_name,
    );

    let where: any = {};

    if (andWhere) {
      _.merge(where, andWhere);
    }

    if (allFields.find((f) => f === 'deletedAt')) {
      where = {
        AND: {
          ...where,
          deletedAt: where.deletedAt ?? null,
        },
      };
    }

    const { skip, take } = this.countResponseItems(params);

    const records = model.findMany({
      where,
      skip,
      take,
    });

    const recordsCount = model.count({
      where,
    });

    const [data, total] = await Promise.all([records, recordsCount]);

    return {
      limit: params.limit,
      page: params.page,
      total: Number(total),
      data: data,
    };
  }

  private countResponseItems(params: ListingDto) {
    const { limit, page } = params;

    const res = {
      skip: undefined,
      take: undefined,
    };

    if (limit === 0 || (!limit && !page)) {
      return res;
    }

    res.skip = (page - 1) * limit;
    res.take = limit;

    return res;
  }
}
