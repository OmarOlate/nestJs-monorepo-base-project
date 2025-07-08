import { catchError, of } from 'rxjs';
import { AxiosError } from 'axios';
import { isObject } from 'class-validator';
import { HttpStatus } from '@nestjs/common';

export function catchHttpError<T>() {
  return catchError((error: unknown) => {
    if (error instanceof AxiosError) {
      const data = error.response?.data as unknown;
      const response = isObject(data) ? data : { message: data };

      console.error('❌ Error capturado en catchHttpError:', {
        ...response,
        status: error.response?.status ?? HttpStatus.BAD_GATEWAY,
        isExternal: true,
      });

      return of(undefined); // << NO LANZAMOS ERROR
    }

    console.error('❌ Error inesperado:', error);
    return of(undefined); // << NO LANZAMOS ERROR
  });
}
