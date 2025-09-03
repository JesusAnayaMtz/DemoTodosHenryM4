import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}