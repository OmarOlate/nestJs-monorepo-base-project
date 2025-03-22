import { Injectable } from '@nestjs/common';
import { FindAllUsersView } from 'libs/auth/database/src';
import { FindAllUsersResponseDto } from './dtos';

@Injectable()
export class FindAllUsersMapperService {
  mapper(users: FindAllUsersView[]): Readonly<FindAllUsersResponseDto[]> {
    return users.map((user) => ({
      id: user.id,
      code: user.code,
      email: user.email,
      fullName: user.fullName,
      nameCommerce: user.nameCommerce,
      nameCommerceBranch: user.nameCommerceBranch,
      rut: user.rut,
      statusCode: user.statusCode,
    }));
  }
}
