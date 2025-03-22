import { ResetPasswordInputDto } from '../../domain';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ResetPasswordRequestDto implements ResetPasswordInputDto {
  @ApiProperty({ description: 'User code', example: 'uuid' })
  @IsNotEmpty()
  @IsString()
  code!: string;

  @ApiProperty({ description: 'current password', example: 'password' })
  @IsOptional()
  @IsString()
  currentPassword?: string | undefined;

  @ApiProperty({ description: 'new password', example: 'password' })
  @IsNotEmpty()
  @IsString()
  newPassword!: string;
}
