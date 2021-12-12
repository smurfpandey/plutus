import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  name: string;

  @IsNotEmpty()
  @IsDate()
  lastLogin: Date;
}
