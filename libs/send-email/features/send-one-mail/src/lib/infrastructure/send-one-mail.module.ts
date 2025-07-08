import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SEND_ONE_EMAIL_SERVICE, SendOneEmailUseCase } from '../application';
import { SendOneEmailApiService } from './send-one-email-api.service';

@Module({
  imports: [HttpModule],
  providers: [
    SendOneEmailUseCase,
    {
      provide: SEND_ONE_EMAIL_SERVICE,
      useClass: SendOneEmailApiService,
    },
  ],
  exports: [SendOneEmailUseCase],
})
export class SendOneMailModule {}
