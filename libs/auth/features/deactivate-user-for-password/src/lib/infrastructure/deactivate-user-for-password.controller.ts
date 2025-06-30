import { DeactivateUserForPasswordUseCase } from "../application/deactivate-user-for-password.use-case";
import {
    ApiOperation,
    ApiTags,
  } from '@nestjs/swagger';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { Body, Controller, HttpCode, Put, } from "@nestjs/common";
import { DeactivateUserForPasswordRequestDto } from "./dtos";

@ApiTags(ApiPath.LOGIN)
@Controller()
export class DeactivateUserForPasswordController {
    constructor(
        private readonly deactivateUserForPassword: DeactivateUserForPasswordUseCase,
    ){}

    @Put()
    @HttpCode(200)
    @ApiOperation({description: 'change status user for reset password'})
    async execute(
        @Body() input: DeactivateUserForPasswordRequestDto
    ): Promise<{code: number; message: string}>{
        await this.deactivateUserForPassword.execute(input)

        return {
            code:200,
            message: 'User successfully deactivated',
        }
    }

}