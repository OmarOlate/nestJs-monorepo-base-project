import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage) || 10;

    return next.handle().pipe(
      map((data: any[]) => {
        const totalItems = data.length;
        const totalPages = Math.ceil(totalItems / perPage);
        const paginatedData = data.slice((page - 1) * perPage, page * perPage);

        return {
          data: paginatedData,
          pagination: {
            page,
            perPage,
            totalItems,
            totalPages,
          },
        };
      })
    );
  }
}
