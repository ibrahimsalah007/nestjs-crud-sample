import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  bio?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiPropertyOptional()
  @IsPhoneNumber()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty()
  @IsNumber()
  userId: number;
}
