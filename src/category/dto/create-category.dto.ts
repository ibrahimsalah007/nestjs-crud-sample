import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Technology',
    description: 'The name of the category',
  })
  @IsString()
  @MaxLength(50)
  name: string;

  @ApiPropertyOptional({
    example: 'Articles about technology and programming',
    description: 'A description of the category',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  description?: string;
}
