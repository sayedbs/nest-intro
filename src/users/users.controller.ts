import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Get('/:id')
    findOne(@Param() params: any, @Query() query: any): string {
        console.log(params, query);
        return `This action returns a ${params.id} user`;
    }

    @Post()
    create(@Req() request: any): string {
        console.log(request.body);
        return 'This action adds a new user';
    }
}
