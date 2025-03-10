import { AuthenticateUserInputDto } from '../../domain';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthenticateUserRequestDto implements AuthenticateUserInputDto {
  @ApiProperty({ description: 'Email user', example: 'example@example.com' })
  @IsNotEmpty()
  @IsString()
  email!: string;

  @ApiProperty({ description: 'password', example: '*********' })
  @IsNotEmpty()
  @IsString()
  password!: string;
}
