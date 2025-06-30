import { DeleteTemporaryPasswordDto } from "../../domain";

export class DeleteTemporaryPasswordRequestDto implements DeleteTemporaryPasswordDto{
    code!: string;
}