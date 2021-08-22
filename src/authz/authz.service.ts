import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthzService {
  async validateUser(email: string): Promise<any> {
    return {};
  }
}
