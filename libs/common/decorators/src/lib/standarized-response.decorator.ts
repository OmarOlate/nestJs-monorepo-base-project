import { applyDecorators, HttpStatus, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';

type ApiPaginatedResponseOptions = {
  description?: string;
  isArray?: boolean;
};

export const ApiStandardizedResponse = (
  model: Type<unknown>,
  options: ApiPaginatedResponseOptions = {}
) => {
  const { description, isArray = false } = options;

  return applyDecorators(
    ApiExtraModels(model),
    ApiOperation({ summary: description }),
    ApiResponse({
      status: HttpStatus.OK,
      description,
      schema: {
        type: isArray ? 'array' : 'object',
        ...(isArray
          ? {
              items: { $ref: getSchemaPath(model) },
            }
          : {
              $ref: getSchemaPath(model),
            }),
      },
    })
  );
};
