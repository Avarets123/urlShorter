import { Module } from '@nestjs/common';
import { UrlRepository } from './repositories/url.repository';
import { UrlService } from './services/url.service';
import { UrlController } from './controllers/url.controller';

@Module({
  controllers: [UrlController],
  providers: [UrlRepository, UrlService],
})
export class UrlModule {}
