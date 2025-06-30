import { Inject, Injectable } from "@nestjs/common";
import { VALIDATE_USER_EXISTS_SERVICE, ValidateUserExistsService } from "./ports/validate-user-exists.port";
import { CREATE_PENDING_PASSWORD_SERVICE,
    CreatePendingPasswordService,
    DEACTIVATE_USER_FOR_PASSWORD_SERVICE,
    DeactivateUserForPasswordService,
    VALIDATE_PENDING_PASSWORD_SERVICE,
    ValidatePendingPasswordService } from "./ports";
import { DeactivateUserForPasswordInputDto } from "../domain";

@Injectable()
export class DeactivateUserForPasswordUseCase{
    constructor(
        @Inject(VALIDATE_USER_EXISTS_SERVICE)
        private readonly validateUserExists: ValidateUserExistsService,
        @Inject(VALIDATE_PENDING_PASSWORD_SERVICE)
        private readonly validatePendingPassword: ValidatePendingPasswordService,
        @Inject(DEACTIVATE_USER_FOR_PASSWORD_SERVICE)
        private readonly deactivateUserForPassword: DeactivateUserForPasswordService,
        @Inject(CREATE_PENDING_PASSWORD_SERVICE)
        private readonly createPendingPassword: CreatePendingPasswordService
    ){}

    async execute(input: DeactivateUserForPasswordInputDto): Promise<void>{
        await this.validateUserExists.execute(input);

        await this.validatePendingPassword.execute(input);

        await this.createPendingPassword.execute(input);

        await this.deactivateUserForPassword.execute(input);

    }
}