import { Injectable } from '@nestjs/common';
import { SendOneEmailService } from '../application';
import { SendOneEmailInputDto } from '../domain';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchHttpError } from '@nest-js-monorepo-base-project/operators';
import { firstValueFrom, tap } from 'rxjs';

@Injectable()
export class SendOneEmailApiService implements SendOneEmailService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async execute(input: SendOneEmailInputDto): Promise<void> {
    await firstValueFrom(
      this.httpService
        .post(
          `${this.configService.getOrThrow<string>(
            'SEND_EMAIL_URL'
          )}/send-email`,
          input
        )
        .pipe(catchHttpError())
    );
  }
}
