import { FindNewUserOutputDto } from "./find-new-user-output.dto"
import { NewUserPasswordValidateInputDto } from "./new-user-password-validate-input.dto";

export type NewUserPasswordInputDto = Readonly<{
    userCode: FindNewUserOutputDto['userCode'];
    password: NewUserPasswordValidateInputDto['password'];
}>