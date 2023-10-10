import { Prisma, UrlModel } from '@prisma/client';
import { UrlModelCreateDto } from '../dto/urlModelCreate.dto';

export interface IUrlRepository {
  create(data: Prisma.UrlModelCreateInput): Promise<unknown>;
  delete(id: string): Promise<void>;
  findMany(): Promise<UrlModel[]>;
  getOriginalUrlByTitle(title: string): Promise<string>;
  findOneByFieldAndValue(
    field: keyof UrlModel,
    value: string,
    ...args: unknown[]
  ): Promise<UrlModel>;
}
