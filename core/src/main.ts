import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { exceptionBoot } from './infrastructure/exceptions/exception.boot';
import { validationBoot } from '@infrastructure/validation/validation.boot';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  exceptionBoot(app);
  validationBoot(app);

  const PORT = +process.env.API_PORT || 3333;

  await app.listen(PORT);

  console.log('Api service has ben started on port: ' + PORT);
}
bootstrap();
