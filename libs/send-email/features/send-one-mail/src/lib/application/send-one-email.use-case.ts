import { Inject, Injectable } from '@nestjs/common';
import { SEND_ONE_EMAIL_SERVICE, SendOneEmailService } from './ports';
import { SendOneEmailInputDto } from '../domain';

@Injectable()
export class SendOneEmailUseCase {
  constructor(
    @Inject(SEND_ONE_EMAIL_SERVICE)
    private readonly sendOneEmail: SendOneEmailService
  ) {}

  async execute(input: SendOneEmailInputDto): Promise<void> {
    return this.sendOneEmail.execute(input);
  }
}
