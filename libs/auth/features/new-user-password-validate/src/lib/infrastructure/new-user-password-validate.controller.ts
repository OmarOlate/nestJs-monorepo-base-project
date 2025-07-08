import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NewUserPasswordValidateUseCase } from '../application';
import { Public } from '../../../../../../common/decorators/public.decorator';
import { NewUserPasswordValidateRequestDto } from './dtos';


@ApiTags(ApiPath.LOGIN)
@Controller()
export class NewUserPasswordValidateController{
    constructor(
        private readonly newUserPasswordValidateUseCase: NewUserPasswordValidateUseCase
    ){}

    @Public()
    @Post()
    @HttpCode(201)
    @ApiOperation({ description: 'New user validate password'})
    async execute(
        @Body() userData: NewUserPasswordValidateRequestDto
    ): Promise<{ code: number; message: string }> {
        await this.newUserPasswordValidateUseCase.execute(userData);

        return {
            code: 201,
            message: 'Password validated successfully',
        };

    }
}