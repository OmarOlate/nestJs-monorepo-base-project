import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllUsersService } from '../application';
import { FindAllUsersInputDto, FindAllUsersOutputDto } from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllUsersRequestDto, FindAllUsersResponseDto } from './dtos';
import { FindAllUsersView } from 'libs/auth/database/src';
import { filter, map } from 'rxjs/operators';
import { FindAllUsersMapperService } from './find-all-users-mapper.service';

@Injectable()
export class FindAllUsersSqlService implements FindAllUsersService {
  constructor(
    @InjectRepository(FindAllUsersView)
    private findAllUsersView: Repository<FindAllUsersView>,
    private readonly findAllUsersMapperService: FindAllUsersMapperService
  ) {}

  async execute(
    filters: FindAllUsersRequestDto
  ): Promise<Readonly<FindAllUsersOutputDto[]>> {
    const queryBuilder = await this.createQueryBuilder(filters);

    const usersView = await queryBuilder.getMany();

    return this.findAllUsersMapperService.mapper(usersView);
  }

  private async createQueryBuilder(filters: FindAllUsersInputDto) {
    const queryBuilder = this.findAllUsersView.createQueryBuilder('view');

    if (filters.name) {
      queryBuilder.andWhere('view.fullName LIKE :name', {
        name: `%${filters.name}%`,
      });
    }

    if (filters.email) {
      queryBuilder.andWhere('view.email LIKE :email', {
        email: `%${filters.email}%`,
      });
    }
    if (filters.status) {
      queryBuilder.andWhere('view.statusCode = :statusCode', {
        statusCode: filters.status,
      });
    }

    const page = filters.page ?? 1;
    const perPage = filters.perPage ?? 10;
    const offset = (page - 1) * perPage;

    queryBuilder.skip(offset).take(perPage);

    return queryBuilder;
  }
}
