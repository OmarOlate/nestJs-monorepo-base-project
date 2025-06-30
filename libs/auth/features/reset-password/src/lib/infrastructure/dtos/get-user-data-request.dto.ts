import { GetUserDataInputDto } from "../../domain";

export class GetUserDataRequestDto implements GetUserDataInputDto{
    email!: string;
}