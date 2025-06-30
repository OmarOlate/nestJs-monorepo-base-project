import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { FIND_NEW_USER_SERVICE, FindNewUserService, NEW_USER_PASSWORD_VALIDATE_SERVICE, NewUserPasswordValidateService } from "./ports";
import { NewUserPasswordValidateInputDto } from "../domain";

@Injectable()
export class NewUserPasswordValidateUseCase {
    constructor(
        @Inject(FIND_NEW_USER_SERVICE)
        private readonly findNewUser: FindNewUserService,
        @Inject(NEW_USER_PASSWORD_VALIDATE_SERVICE)
        private readonly newUserPasswordValidate: NewUserPasswordValidateService
    ){}

    async execute(input: NewUserPasswordValidateInputDto): Promise<void>{
        const { userCode } = await this.findNewUser.execute(input);

        return await this.newUserPasswordValidate.execute({
            userCode,
            password: input.password
        });
    }
}