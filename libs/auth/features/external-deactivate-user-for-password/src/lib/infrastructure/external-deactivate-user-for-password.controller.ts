import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiPath } from '../../../../../enums/api-path.enum';
import { Body, Controller, HttpCode, Put } from "@nestjs/common";
import { ExternalDeactivateUserForPasswordUseCase } from "../application/external-deactivate-user-for-password.use-case";
import { ExternalDeactivateUserForPasswordRequestDto } from "./dtos";
import { Public } from '../../../../../../common/decorators/public.decorator';

@ApiTags(ApiPath.LOGIN)
@Controller()
export class ExternalDeactivateUserForPasswordController{
    constructor(
        private readonly externalDeactivateUserForPassword: ExternalDeactivateUserForPasswordUseCase
    ){}

    @Public()
    @Put()
    @HttpCode(200)
    @ApiOperation({description: 'change status user for reset password'})
    async execute(
        @Body() input: ExternalDeactivateUserForPasswordRequestDto
    ): Promise<{statusCode: number; message: string}>{
        await this.externalDeactivateUserForPassword.execute(input);

        return {
            statusCode:200,
            message: 'User successfully deactivated',
        }
    }
}