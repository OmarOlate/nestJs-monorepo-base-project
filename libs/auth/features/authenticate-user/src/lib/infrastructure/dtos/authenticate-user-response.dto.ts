import { IsString } from 'class-validator';
import { AuthenticateUserOutputDto } from '../../domain';

export class AuthenticateUserResponseDto implements AuthenticateUserOutputDto {
  readonly token!: string;
  readonly userData!: Readonly<{
    rut: string;
    code: string;
    name: string;
    fatherLastName: string;
    motherLastName: string;
    email: string;
    status: string;
  }>;
}
