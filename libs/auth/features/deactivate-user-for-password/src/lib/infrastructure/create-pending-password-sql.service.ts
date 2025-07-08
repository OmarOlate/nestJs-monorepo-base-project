import { Injectable } from '@nestjs/common';
import { CreatePendingPasswordService } from '../application';
import { InjectRepository } from '@nestjs/typeorm';
import { TemporaryPassword } from 'libs/auth/database';
import { Repository } from 'typeorm';
import { DeactivateUserForPasswordRequestDto } from './dtos';
import { CreatePendingPasswordOutputDto } from '../domain';

@Injectable()
export class CreatePendingPasswordSqlService
  implements CreatePendingPasswordService
{
  constructor(
    @InjectRepository(TemporaryPassword)
    private readonly temporaryPasswordRepository: Repository<TemporaryPassword>
  ) {}

  async execute(
    input: DeactivateUserForPasswordRequestDto
  ): Promise<CreatePendingPasswordOutputDto> {
    const temporaryPasswordCreate =
      await this.temporaryPasswordRepository.create({
        codeUser: input.userCode,
      });

    await this.temporaryPasswordRepository.save(temporaryPasswordCreate);

    const savedPassword = await this.temporaryPasswordRepository.findOne({
      where: { codeUser: input.userCode },
    });

    if (!savedPassword) {
      throw new Error('Temporary password not found after save');
    }
    return { password: savedPassword.password };
  }
}
