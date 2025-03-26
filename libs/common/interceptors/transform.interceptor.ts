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
      totalItems?: number;
    }
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        let flattenedData = data;
        if (Array.isArray(data) && Array.isArray(data[0])) {
          flattenedData = data.flat();
        }

        return {
          data: flattenedData,
          currentPage: this.options?.currentPage ?? 1,
          perPage: this.options?.perPage ?? flattenedData.length,
          totalItems: this.options?.totalItems ?? flattenedData.length,
        };
      })
    );
  }
}
