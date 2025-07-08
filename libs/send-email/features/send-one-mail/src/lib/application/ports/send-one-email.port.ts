import { SendOneEmailInputDto } from '../../domain';

export type SendOneEmailService = {
  execute(input: SendOneEmailInputDto): Promise<void>;
};

export const SEND_ONE_EMAIL_SERVICE = Symbol('SendOneEmailService');
