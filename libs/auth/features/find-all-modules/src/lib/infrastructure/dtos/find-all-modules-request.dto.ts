import { FindAllModulesInputDto } from '../../domain';
import { PaginationDto } from '@nest-js-monorepo-base-project/decorators';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FindAllModulesRequestDto
  extends PaginationDto
  implements FindAllModulesInputDto
{
  @ApiPropertyOptional({
    description: 'Code module',
    example: 'test',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly code?: string;

  @ApiPropertyOptional({
    description: 'Name modules',
    example: 'test',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly name?: string;
}
