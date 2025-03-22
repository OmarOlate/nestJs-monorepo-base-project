import { FindAllUsersOutputDto } from '../../domain';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class FindAllUsersResponseDto implements FindAllUsersOutputDto {
  @ApiProperty({ example: 1, description: 'Unique ID of user' })
  @IsInt()
  @IsNotEmpty()
  id!: number;

  @ApiProperty({ description: 'Unique UUID' })
  @IsString()
  @IsNotEmpty()
  code!: string;

  @ApiProperty({ description: 'Unique user rut' })
  @IsString()
  @IsNotEmpty()
  rut!: string;

  @ApiProperty({ description: 'User name' })
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @ApiProperty({ example: 'dummy@example.com', description: 'email' })
  @IsString()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({ description: 'Commerce name' })
  @IsString()
  @IsNotEmpty()
  nameCommerce!: string;

  @ApiProperty({ description: 'Commerce name branch' })
  @IsString()
  @IsNotEmpty()
  nameCommerceBranch!: string;

  @ApiProperty({ description: 'status code' })
  @IsString()
  @IsNotEmpty()
  statusCode!: string;
}
