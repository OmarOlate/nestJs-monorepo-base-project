import { GetUserDataOutputDto } from "../../domain";

export class GetUserDataResponseDto implements GetUserDataOutputDto{
    code!: string;
    status!: string;
}