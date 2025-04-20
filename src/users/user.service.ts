import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) { }

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = new UserEntity();
    user.email = createUserDto.email;
    user.name = createUserDto.name;
    return this.userRepo.save(user);
  }

  updateLastLogin(user: UserEntity): Promise<UpdateResult> {
    return this.userRepo.createQueryBuilder()
      .update(UserEntity)
      .set({
        lastLoginDateTime: () => "NOW()"
      })
      .where("id = :id", { id: user.id })
      .execute();
  }

  findOne(id: string): Promise<UserEntity> {
    return this.userRepo.findOne(id);
  }

  findByEmail(email: string): Promise<UserEntity> {
    return this.userRepo.findOne({ email: email });
  }
}
