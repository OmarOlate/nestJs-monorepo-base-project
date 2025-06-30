import { Body, Controller, HttpCode, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { ResetPasswordUseCase } from '../application';
import { ResetPasswordRequestDto } from './dtos';
import { Public } from '../../../../../../common/decorators/public.decorator';


@ApiTags(ApiPath.LOGIN)
@Controller()
export class ResetPasswordController {
  constructor(private readonly resetPasswordUseCase: ResetPasswordUseCase) {}

  @Put()
  @HttpCode(200)
  @Public()
  @ApiOperation({ description: 'reset password user' })
  async execte(@Body() input: ResetPasswordRequestDto): Promise<{code: number; message: string}> {
    await this.resetPasswordUseCase.execute(input);

    return {
      code: 200,
      message: 'Password reset successfully',
    };  }
}
