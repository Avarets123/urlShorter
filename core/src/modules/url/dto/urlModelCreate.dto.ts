import { IsString, IsUrl } from 'class-validator';

export class UrlModelCreateDto {
  @IsUrl()
  url: string;

  @IsString()
  title: string;
}
