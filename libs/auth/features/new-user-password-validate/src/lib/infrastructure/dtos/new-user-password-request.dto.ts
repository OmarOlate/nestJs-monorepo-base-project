import { NewUserPasswordInputDto } from "../../domain";

export class NewUserPasswordRequestDto implements NewUserPasswordInputDto{
    userCode!: string;
    password!: string;
}