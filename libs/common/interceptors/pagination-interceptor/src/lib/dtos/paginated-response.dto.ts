import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginationMetaDto } from './pagintion-meta.dto';

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel
) => {
  return applyDecorators(
    ApiExtraModels(model, PaginationMetaDto),
    ApiOkResponse({
      description: 'Successful paginated response',
      schema: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            items: { $ref: getSchemaPath(model) },
          },
          pagination: {
            $ref: getSchemaPath(PaginationMetaDto),
          },
        },
      },
    })
  );
};
