import { UserEntity } from '../user.entity';
import { UserDto } from './user.dto';

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, email, name, lastLoginDateTime } = data;
  let userDto: UserDto = { id, email, name, lastLogin: lastLoginDateTime, };
  return userDto;
}
