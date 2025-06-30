import { GetUserInformationOutputDto } from "../../domain/dtos/get-user-information-output.dto";

export class GetUserInformationResponseDto implements GetUserInformationOutputDto{
    code!: string;
}