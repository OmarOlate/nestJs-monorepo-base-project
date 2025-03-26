import { ApiProperty } from '@nestjs/swagger';

export class StandardizedResponseDto<T> {
  @ApiProperty({ description: 'Datos de la respuesta' })
  data: T | T[];

  @ApiProperty({ description: 'Página actual', required: false })
  currentPage?: number;

  @ApiProperty({
    description: 'Cantidad de elementos por página',
    required: false,
  })
  perPage?: number;

  @ApiProperty({ description: 'Total de elementos', required: false })
  totalItems?: number;

  constructor(
    data: T | T[],
    options?: {
      isArray?: boolean;
      currentPage?: number;
      perPage?: number;
      totalItems?: number;
    }
  ) {
    this.data = options?.isArray ? (data as T[]) : (data as T);
    this.currentPage = options?.currentPage;
    this.perPage = options?.perPage;
    this.totalItems = options?.totalItems;
  }
}
