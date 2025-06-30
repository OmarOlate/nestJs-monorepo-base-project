import { ResetPasswordInputDto } from '../../domain';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordRequestDto implements ResetPasswordInputDto {
  @ApiProperty({ description: 'User code', example: 'uuid' })
  @IsNotEmpty()
  @IsString()
  email!: string;

  @ApiProperty({ description: 'current password', example: 'password' })
  @IsString()
  currentPassword!: string;

  @ApiProperty({ description: 'new password', example: 'password' })
  @IsNotEmpty()
  @IsString()
  newPassword!: string;
}
