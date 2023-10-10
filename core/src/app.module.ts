import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';

// export const getEnv = (env: string) => process.env[env];

@Module({
  imports: [DatabaseModule],
})
export class AppModule {}
