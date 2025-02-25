import { ApiProperty } from '@nestjs/swagger';
import { FindCommunesByProvinceIdInputDto } from '../../domain';
import { IsInt, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class FindCommunesByProvinceIdRequestDto
  implements FindCommunesByProvinceIdInputDto
{
  @ApiProperty({
    description: 'The ID of the province',
    example: 1,
  })
  @IsInt()
  @IsPositive()
  provinceId!: number;
}
