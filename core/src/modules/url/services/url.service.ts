import { BadRequestException, Injectable } from '@nestjs/common';
import { UrlRepository } from '../repositories/url.repository';
import { UrlModelCreateDto } from '../dto/urlModelCreate.dto';

@Injectable()
export class UrlService {
  constructor(private readonly urlRepository: UrlRepository) {}

  async create(dto: UrlModelCreateDto) {
    const { title } = dto;

    await this.checkUniqueTitle(title);

    const data = this.makeUrlCreateObj(dto);

    return this.urlRepository.create(data);
  }

  findMany() {
    return this.urlRepository.findMany();
  }

  getOriginalUrlByTitle(title: string) {
    return this.urlRepository.getOriginalUrlByTitle(title);
  }

  async delete(id: string) {
    await this.urlRepository.delete(id);
  }

  private async checkUniqueTitle(title: string) {
    if (!title) return;

    const hasUrl = await this.urlRepository.findOneByFieldAndValue(
      'title',
      title,
    );

    if (hasUrl) throw new BadRequestException('Title должен быть уникальным!');
  }

  private getUrlLastPart(url: string): string {
    const lastPart = url.split('/');

    return lastPart[lastPart.length - 1];
  }

  private makeUrlCreateObj(dto: UrlModelCreateDto) {
    const { title, url } = dto;

    const data = {
      originalUrl: url,
      title: title,
    };

    if (!title) {
      data.title = this.getUrlLastPart(url);
    }

    return data;
  }
}
