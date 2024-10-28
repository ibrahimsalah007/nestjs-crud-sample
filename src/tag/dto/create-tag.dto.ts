import { ApiProperty } from '@nestjs/swagger';

import { IsString, MaxLength } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    example: 'Internet',
    description: 'The name of the tag',
  })
  @IsString()
  @MaxLength(30)
  name: string;
}
