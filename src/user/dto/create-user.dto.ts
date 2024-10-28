import { ApiProperty } from '@nestjs/swagger';

import { IsDefined, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  username: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  password: string;
}
