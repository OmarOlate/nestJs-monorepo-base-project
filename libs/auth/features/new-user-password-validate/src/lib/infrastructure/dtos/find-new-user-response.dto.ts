import { FindNewUserOutputDto } from "../../domain";

export class FindNewUserResponseDto implements FindNewUserOutputDto{
    userCode!: string;
}