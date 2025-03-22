import { Body, Controller, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiPath } from '../../../../../enums/api-path.enum';
import { ResetPasswordUseCase } from '../application';
import { ResetPasswordRequestDto } from './dtos';

@ApiTags(ApiPath.LOGIN)
@Controller()
export class ResetPasswordController {
  constructor(private readonly resetPasswordUseCase: ResetPasswordUseCase) {}

  @Put()
  @ApiOperation({ description: 'reset password user' })
  async execte(@Body() input: ResetPasswordRequestDto): Promise<void> {
    return this.resetPasswordUseCase.execute(input);
  }
}
