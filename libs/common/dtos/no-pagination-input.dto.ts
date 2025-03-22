import { PaginationInputDto } from './pagination-input.dto';

export type NoPaginationInputDto<TDto extends PaginationInputDto> = Omit<
  TDto,
  keyof PaginationInputDto
>;
