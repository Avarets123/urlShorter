import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RepositoryProvider } from './repository.provider';

@Global()
@Module({
  providers: [PrismaService, RepositoryProvider],
  exports: [PrismaService, RepositoryProvider],
})
export class DatabaseModule {}
