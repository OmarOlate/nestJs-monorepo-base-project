import { ApiProperty } from '@nestjs/swagger';
import { FindAllUsersInputDto } from '../../domain';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindAllUsersRequestDto implements FindAllUsersInputDto {
  @ApiProperty({
    description: 'User name',
    example: 'Dummy Name',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiProperty({
    description: 'User email',
    example: 'test@example.com',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly email?: string;

  @ApiProperty({
    description: 'User status',
    example: 'STATUS',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly status?: string;

  @ApiProperty({ description: 'Number page', example: 1, required: false })
  @IsOptional()
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined)) // ✅ Convierte a número
  @IsInt()
  @IsPositive()
  readonly page?: number;

  @ApiProperty({ description: 'Per page', example: 10, required: false })
  @IsOptional()
  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined)) // ✅ Convierte a número
  @IsInt()
  @IsPositive()
  readonly perPage?: number;
}
