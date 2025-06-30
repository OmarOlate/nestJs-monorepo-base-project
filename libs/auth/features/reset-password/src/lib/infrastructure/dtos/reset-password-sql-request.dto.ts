import { ResetPasswordSqlInputDto } from "../../domain";

export class ResetPasswordSqlRequestDto implements ResetPasswordSqlInputDto{
    newPassword!: string;
    code!: string;
}