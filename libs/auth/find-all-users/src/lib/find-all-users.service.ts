import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUsersService {
  createAccount(createAccountDto: any): string {
    // Lógica para crear cuenta
    return `Cuenta creada para ${createAccountDto.email}`;
  }
}
