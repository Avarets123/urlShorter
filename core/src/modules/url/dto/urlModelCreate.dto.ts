import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UrlModelCreateDto {
  @IsUrl()
  url: string;

  @IsOptional()
  @IsString()
  title: string;
}
