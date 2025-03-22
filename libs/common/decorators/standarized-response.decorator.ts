import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { TransformInterceptor } from '../interceptors/transform.interceptor';

export function StandardizedResponse(
  model: any,
  options?: {
    isArray?: boolean;
    description?: string;
    currentPage?: number;
    perPage?: number;
    total?: number;
  }
) {
  return applyDecorators(
    UseInterceptors(
      new TransformInterceptor({
        isArray: options?.isArray,
        currentPage: options?.currentPage,
        perPage: options?.perPage,
        total: options?.total,
      })
    ),
    ApiOkResponse({
      description: options?.description || 'Successful response',
      schema: {
        properties: {
          data: {
            type: options?.isArray ? 'array' : 'object',
            items: options?.isArray
              ? { $ref: getSchemaPath(model) }
              : undefined,
          },
          currentPage: { type: 'number', nullable: true },
          perPage: { type: 'number', nullable: true },
          total: { type: 'number', nullable: true },
        },
      },
    })
  );
}
