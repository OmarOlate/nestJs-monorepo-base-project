import { Inject, Injectable } from '@nestjs/common';
import { RESET_PASSWORD_SERVICE, ResetPasswordService } from './ports';
import { ResetPasswordInputDto } from '../domain';

@Injectable()
export class ResetPasswordUseCase {
  constructor(
    @Inject(RESET_PASSWORD_SERVICE)
    private readonly resetPassword: ResetPasswordService
  ) {}

  async execute(input: ResetPasswordInputDto): Promise<void> {
    return await this.resetPassword.resetPassword(input);
  }
}
