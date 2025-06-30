import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { GET_USER_INFORMATION_SERVICE, GetUserInformationService } from "./ports";
import { ExternalDeactivateUserForPasswordInputDto } from "../domain";
import { DeactivateUserForPasswordUseCase } from "libs/auth/features/deactivate-user-for-password/src/lib/application/deactivate-user-for-password.use-case";

@Injectable()
export class ExternalDeactivateUserForPasswordUseCase{

    constructor(
        @Inject(GET_USER_INFORMATION_SERVICE)
        private readonly getUserInformation: GetUserInformationService,
        private readonly deactivateUserPassword: DeactivateUserForPasswordUseCase
    ){}

    async execute(input: ExternalDeactivateUserForPasswordInputDto): Promise<void>{

        const userData = await this.getUserInformation.execute(input);

        if(!userData) throw new ConflictException(`user not found`);

        this.deactivateUserPassword.execute({userCode: userData.code});
    }
}