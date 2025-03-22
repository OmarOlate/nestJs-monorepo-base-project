import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ResetPasswordService } from '../application';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../database/src/entities/user.entity';
import { Repository } from 'typeorm';
import { ResetPasswordInputDto } from '../domain';
import * as bcrypt from 'bcrypt';
import { InitialResetPasswordSqlService } from './initial-reset-password-sql.service';
import { STATUS_CODE } from './enums';

@Injectable()
export class ResetPasswordSqlService implements ResetPasswordService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly initialResetPasswordSqlService: InitialResetPasswordSqlService
  ) {}

  async resetPassword(input: ResetPasswordInputDto): Promise<void> {
    const userData = await this.userRepository.findOne({
      select: { status: { code: true } },
      where: { code: input.code },
      relations: ['status'],
    });

    const newPassword = await bcrypt.hash(input.newPassword, 15);

    if (!userData) {
      throw new NotFoundException(
        `User with code ${String(input.code)} not found`
      );
    }

    if (userData.status.code === STATUS_CODE.PENDING_PASSWORD) {
      return await this.initialResetPasswordSqlService.execute({
        id: userData.id,
        code: userData.code,
        newPassword,
      });
    }

    if (!input.currentPassword) {
      throw new BadRequestException(`The current password not found`);
    }

    const isPasswordValid = await bcrypt.compare(
      userData.password,
      input.currentPassword
    );

    if (!isPasswordValid) {
      throw new BadRequestException(`The password entered does not match`);
    }

    this.userRepository.update(userData.id, {
      password: newPassword,
    });
  }
}
