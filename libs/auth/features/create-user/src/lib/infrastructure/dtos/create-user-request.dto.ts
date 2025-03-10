import { CreateUserInputDto } from '../../domain';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequestDto implements CreateUserInputDto {
  @ApiProperty({ description: 'User RUT', example: '12345678-9' })
  @IsNotEmpty()
  @IsString()
  readonly rut!: string;

  @ApiProperty({ description: 'User first name', example: 'John' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ description: 'Father last name', example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  readonly fatherLastName!: string;

  @ApiProperty({ description: 'Mother last name', example: 'Smith' })
  @IsNotEmpty()
  @IsString()
  readonly matherLastName!: string;

  @ApiProperty({ description: 'User email', example: 'john.doe@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email!: string;
}
