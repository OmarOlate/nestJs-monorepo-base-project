import { Inject, Injectable } from '@nestjs/common';
import { CREATE_USER_SERVICE, CreateUserService } from './ports';
import { CreateUserInputDto } from '../domain';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(CREATE_USER_SERVICE)
    private readonly createUser: CreateUserService
  ) {}

  async execute(inputDto: CreateUserInputDto): Promise<void> {
    return await this.createUser.createUser(inputDto);
  }
}
