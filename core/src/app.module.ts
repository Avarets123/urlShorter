import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UrlModule } from './modules/url/url.module';

// export const getEnv = (env: string) => process.env[env];

@Module({
  imports: [DatabaseModule, UrlModule],
})
export class AppModule {}
