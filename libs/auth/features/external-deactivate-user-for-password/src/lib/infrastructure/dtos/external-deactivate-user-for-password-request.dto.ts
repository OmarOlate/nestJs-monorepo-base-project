import { IsNotEmpty, IsString } from "class-validator";
import { ExternalDeactivateUserForPasswordInputDto } from "../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class ExternalDeactivateUserForPasswordRequestDto implements ExternalDeactivateUserForPasswordInputDto{
    @ApiProperty({ description: 'User email', example: 'example@domain.cl' })
    @IsString()
    @IsNotEmpty()
    email!: string;
}