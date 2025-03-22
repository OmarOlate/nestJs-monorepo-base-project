import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusUser, User } from 'libs/auth/database/src';
import { Repository } from 'typeorm';
import { ResetPasswordDto } from './dtos';
import { STATUS_CODE } from './enums';

@Injectable()
export class InitialResetPasswordSqlService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(StatusUser)
    private statusUserRepository: Repository<StatusUser>
  ) {}

  async execute(input: ResetPasswordDto): Promise<void> {
    this.userRepository.update(input.id, {
      password: input.newPassword,
    });

    const activeStatus = await this.statusUserRepository.findOne({
      select: { id: true },
      where: { code: STATUS_CODE.ACTIVE },
    });

    if (!activeStatus)
      throw new NotFoundException(
        `Status code for user code: ${String(input.code)} not found`
      );

    this.userRepository.update(input.id, {
      statusId: activeStatus.id,
    });

    return;
  }
}
