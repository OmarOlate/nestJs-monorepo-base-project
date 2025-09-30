import { PaginationDto } from '@nest-js-monorepo-base-project/decorators';
export type FindAllModulesInputDto = Readonly<{
  code?: string;
  name?: string;
  page?: PaginationDto['page'];
  perPage?: PaginationDto['perPage'];
}>;
