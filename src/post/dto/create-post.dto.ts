import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { IsArray, IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty()
  @IsInt()
  authorId: number;

  @ApiProperty()
  @IsInt()
  categoryId: number;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @ApiPropertyOptional({ isArray: true })
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  tagIds?: number[];
}
