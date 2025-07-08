import { ConflictException, Injectable } from '@nestjs/common';
import { ValidateUserExistsService } from '../application';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../database';
import { Repository } from 'typeorm';
import { DeactivateUserForPasswordRequestDto } from './dtos';
import { ValidateUserExistsOutputDto } from '../domain';

@Injectable()
export class ValidateUserExistsSqlService implements ValidateUserExistsService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async execute(
    input: DeactivateUserForPasswordRequestDto
  ): Promise<ValidateUserExistsOutputDto> {
    const userData = await this.userRepository.findOneBy({
      code: input.userCode,
    });

    if (!userData) throw new ConflictException(`User not found`);

    return {
      email: userData.email,
      name: userData.name,
      fatherLastName: userData.fatherLastName,
      matherLastName: userData.matherLastName,
    };
  }
}
