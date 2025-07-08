import { IsNotEmpty, IsString } from "class-validator";
import { DeactivateUserForPasswordInputDto } from "../../domain";
import { ApiProperty } from "@nestjs/swagger";

export class DeactivateUserForPasswordRequestDto implements DeactivateUserForPasswordInputDto{
    @ApiProperty({ description: 'User code', example: 'example-user-code' })
    @IsString()
    @IsNotEmpty()
    userCode!: string;
}