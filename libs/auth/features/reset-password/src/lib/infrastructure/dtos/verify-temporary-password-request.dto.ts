import { VerifyTemporaryPasswordInput } from "../../domain";

export class VerifyTemporaryPasswordRequestDto implements VerifyTemporaryPasswordInput{
    currentPassword!: string;
    code!: string;
} 