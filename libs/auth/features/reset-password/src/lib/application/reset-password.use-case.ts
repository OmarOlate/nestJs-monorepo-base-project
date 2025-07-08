import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ACTIVATE_ACCOUNT_SERVICE, 
  ActivateAccountService, 
  DELETE_TEMPORARY_PASSWORD_SERVICE, 
  DeleteTemporaryPasswordService, 
  GET_USER_DATA_SERVICE, 
  GetUserDataService, 
  RESET_PASSWORD_SERVICE, 
  ResetPasswordService, 
  VALIDATE_TEMPORARY_PASSWORD_SERVICE,
  ValidateTemporaryPasswordService} from './ports';
import { ResetPasswordInputDto } from '../domain';
import { STATUS_CODE } from '../infrastructure/enums';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ResetPasswordUseCase {
  constructor(
    @Inject(GET_USER_DATA_SERVICE)
    private readonly getUserData: GetUserDataService,
    @Inject(VALIDATE_TEMPORARY_PASSWORD_SERVICE)
    private readonly validateTemporaryPassword: ValidateTemporaryPasswordService,
    @Inject(RESET_PASSWORD_SERVICE)
    private readonly resetPassword: ResetPasswordService,
    @Inject(ACTIVATE_ACCOUNT_SERVICE)
    private readonly activateAccount: ActivateAccountService,
    @Inject(DELETE_TEMPORARY_PASSWORD_SERVICE)
    private readonly deleteTemporaryPassword: DeleteTemporaryPasswordService,
  ) {}

  async execute(input: ResetPasswordInputDto): Promise<void> {
    const userData = await this.getUserData.execute({email: input.email});

    if(userData.status !== STATUS_CODE.PENDING_PASSWORD)
      throw new ConflictException(
        `User ${String(input.email)} don't have correctly status for change password`
      );

    await this.validateTemporaryPassword.execute({
      code: userData.code,
      currentPassword: input.currentPassword
    });


    await this.resetPassword.resetPassword({
      newPassword: input.newPassword,
      code: userData.code
    });

    await this.activateAccount.execute(userData.code);

    await this.deleteTemporaryPassword.execute({code: userData.code})
  }
}
