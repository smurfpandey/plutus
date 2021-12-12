import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UserEntity } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthzService {
  constructor (
    private readonly userService: UserService
  ) {}

  async loginOrRegisterUser(userInfo: any): Promise<UserEntity> {
    const dbUser = await this.userService.findByEmail(userInfo.email);
    if (dbUser) {
      // if user exists, update lastLogin timestamp
      await this.userService.updateLastLogin(dbUser);

      return this.userService.findOne(dbUser.id);
    } else {
      // if user does not exist, create one

      const creatUserDto: CreateUserDto = {
        email: userInfo.email,
        name: userInfo.name,
      }

      return await this.userService.createUser(creatUserDto);
    }
  }
}
