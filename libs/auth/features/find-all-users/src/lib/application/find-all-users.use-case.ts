import { Inject, Injectable } from '@nestjs/common';
import { FIND_ALL_USERS_SERVICE, FindAllUsersService } from './ports';
import { FindAllUsersInputDto } from '../domain';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject(FIND_ALL_USERS_SERVICE)
    private readonly findAllUsersService: FindAllUsersService
  ) {}

  async execute(filters: FindAllUsersInputDto) {
    return await this.findAllUsersService.execute(filters);
  }
}
