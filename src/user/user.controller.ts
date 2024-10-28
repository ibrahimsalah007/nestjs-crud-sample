import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_API_CONFIG } from './user.config';
import { User } from './user.entity';

@ApiTags(USER_API_CONFIG.TITLE)
@Controller(USER_API_CONFIG.ROOT)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created.',
    type: User,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Email already exists.',
  })
  @Post(USER_API_CONFIG.CREATE_USER)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(USER_API_CONFIG.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @Get(USER_API_CONFIG.FIND_USER_BY_ID)
  findUserById(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Patch(USER_API_CONFIG.UPDATE)
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(USER_API_CONFIG.DELETE)
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
