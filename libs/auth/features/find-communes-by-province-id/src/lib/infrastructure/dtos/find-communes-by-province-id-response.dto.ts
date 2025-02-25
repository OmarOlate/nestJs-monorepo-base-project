import { ApiProperty } from '@nestjs/swagger';
import { FindCommunesByProvinceIdOutputDto } from '../../domain';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class FindCommunesByProvinceIdResponseDto
  implements FindCommunesByProvinceIdOutputDto
{
  @ApiProperty({ example: 1, description: 'Unique ID of the commune' })
  @IsInt()
  @IsNotEmpty()
  readonly id!: number;

  @ApiProperty({ example: 'Comuna 1', description: 'Name of the commune' })
  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @ApiProperty({ example: 101, description: 'Code of the commune' })
  @IsInt()
  @IsNotEmpty()
  readonly code!: number;
}
