import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Redirect,
} from '@nestjs/common';
import { UrlService } from '../services/url.service';
import { UrlModelCreateDto } from '../dto/urlModelCreate.dto';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get(':title')
  @Redirect()
  async getLink(@Param('title') title: string) {
    const url = await this.urlService.getOriginalUrlByTitle(title);

    return {
      url,
      statusCode: 303,
    };
  }

  @Get()
  findMany() {
    return this.urlService.findMany();
  }

  @Post()
  create(@Body() body: UrlModelCreateDto) {
    return this.urlService.create(body);
  }

  @Delete(':id')
  deleteUrl(@Param('id', ParseUUIDPipe) id: string) {
    return this.urlService.delete(id);
  }
}
