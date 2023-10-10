import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { exceptionBoot } from './infrastructure/exceptions/exception.boot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  exceptionBoot(app);

  await app.init();

  console.log('Translater bot has ben inited');
}
bootstrap();
