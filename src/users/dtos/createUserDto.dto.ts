import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsString()
    @IsOptional()
    surname: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/, {
        message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number',
    })
    password: string;
}