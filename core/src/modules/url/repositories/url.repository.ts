import { PrismaService } from '@infrastructure/database/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IUrlRepository } from '../interfaces/repository.interface';
import { Prisma, UrlModel } from '@prisma/client';

@Injectable()
export class UrlRepository implements IUrlRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findOneByFieldAndValue(
    field: keyof UrlModel,
    value: string,
  ): Promise<UrlModel> {
    return this.prisma.urlModel.findFirst({
      where: {
        [field]: value,
      },
    });
  }

  findMany(): Promise<UrlModel[]> {
    return this.prisma.urlModel.findMany();
  }
  create(data: Prisma.UrlModelCreateInput): Promise<unknown> {
    return this.prisma.urlModel.create({
      data,
    });
  }
  async delete(id: string): Promise<void> {
    await this.prisma.urlModel.delete({
      where: {
        id,
      },
    });
  }

  async getOriginalUrlByTitle(title: string): Promise<string> {
    const url = await this.prisma.urlModel.findFirst({
      where: {
        title,
      },
      select: {
        originalUrl: true,
      },
    });

    if (!url) {
      throw new NotFoundException(
        `Ссылка с таким: "${title}" заголовком не найдена!`,
      );
    }

    return url.originalUrl;
  }
}
