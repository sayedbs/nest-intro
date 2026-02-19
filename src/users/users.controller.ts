import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Req, Header, Headers, Ip, ParseIntPipe, DefaultValuePipe, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUserDto.dto';
import { GetUserParmsDto } from './dtos/getUser.dto';
@Controller('users')
export class UsersController {
    @Get()
    findAll(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ): string {
        console.log(typeof limit, limit);
        console.log(typeof page, page);
        return 'This action returns all users';
    }

    @Get('/:id')
    findOne(
        @Param() GetUserParmsDto: GetUserParmsDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ): string {
        console.log(typeof limit, limit);
        console.log(typeof page, page);
        return `This action returns a ${GetUserParmsDto} user`;
    }

    @Post()
    createUser(
        @Body(new ValidationPipe()) createUserDto: CreateUserDto,
    ): string {
        console.log(createUserDto instanceof CreateUserDto);
        return 'This action adds a new user';
    }
}
