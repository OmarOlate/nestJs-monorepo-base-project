import { Inject, Injectable } from '@nestjs/common';
import { FIND_ALL_USERS_SERVICE, FindAllUsersService } from './ports';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject(FIND_ALL_USERS_SERVICE)
    private readonly findAllUsersService: FindAllUsersService
  ) {}

  async execute() {
    return await this.findAllUsersService.execute();
  }
}
