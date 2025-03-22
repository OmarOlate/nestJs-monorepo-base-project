import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor {
  constructor(
    private options?: {
      isArray?: boolean;
      currentPage?: number;
      perPage?: number;
      total?: number;
    }
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data: this.options?.isArray ? data : [data], // Si no es un array, lo convierto en uno.
          currentPage: this.options?.currentPage ?? 1,
          perPage: this.options?.perPage ?? data.length,
          total: data.length,
        };
      })
    );
  }
}
