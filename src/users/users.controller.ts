import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Req, Header, Headers, Ip, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: Number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: Number
    ) {
        console.log(typeof limit, limit);
        console.log(typeof page, page);

        return 'This action returns all users';
    }

    @Get('/:id')
    findOne(@Param('id') id: any, @Query() query: any): string {
        console.log(id, query);
        return `This action returns a ${id} user`;
    }

    @Post()
    createUser(
        @Req() request: any,
        @Headers() headers: any,
        @Ip() ip: string
    ): string {
        console.log(request.body, headers, ip);
        return 'This action adds a new user';
    }
}
