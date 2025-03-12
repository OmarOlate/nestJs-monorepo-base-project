import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllUsersService } from '../application';
import { FindAllUsersOutputDto } from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllUsersResponseDto } from './dtos';
import { FindAllUsersView } from 'libs/auth/database/src';

@Injectable()
export class FindAllUsersSqlService implements FindAllUsersService {
  constructor(
    @InjectRepository(FindAllUsersView)
    private findAllUsersView: Repository<FindAllUsersView>
  ) {}

  async execute(): Promise<Readonly<FindAllUsersOutputDto[]>> {
    const usersView = await this.findAllUsersView.find();

    if (!usersView) throw new NotFoundException(`Users not found`);

    const result: FindAllUsersResponseDto[] = usersView.map((usersView) => ({
      id: usersView.id,
      code: usersView.code,
      email: usersView.email,
      fatherLastName: usersView.fatherLastName,
      matherLastName: usersView.matherLastName,
      name: usersView.name,
      nameCommerce: usersView.nameCommerce,
      nameCommerceBranch: usersView.nameCommerceBranch,
      rut: usersView.rut,
      statusCode: usersView.statusCode,
    }));

    return result;
  }
}
