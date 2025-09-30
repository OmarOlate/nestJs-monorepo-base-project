import { ApiProperty } from '@nestjs/swagger';
import { FindAllModulesOutputDto } from '../../domain';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class FindAllModulesResponseDto implements FindAllModulesOutputDto {
  @ApiProperty({
    example: 1,
    description: 'Id number',
  })
  @IsInt()
  @IsNotEmpty()
  readonly id!: number;

  @ApiProperty({
    example: 'CODE-TEST',
    description: 'String code module',
  })
  @IsString()
  readonly code!: string;

  @ApiProperty({
    example: 'Name module',
    description: 'String name module',
  })
  readonly name!: string;
}
