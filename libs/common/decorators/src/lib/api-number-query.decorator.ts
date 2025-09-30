import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export function ApiNumberQuery(
  description = 'Query param (number)',
  example = 1
) {
  return applyDecorators(
    Type(() => Number),
    IsNumber(),
    ApiProperty({
      type: Number,
      description,
      example,
    })
  );
}
