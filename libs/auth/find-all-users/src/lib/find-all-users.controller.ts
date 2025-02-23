import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { FindAllUsersService } from './find-all-users.service';
@Controller('auth')
export class FindAllUsersController {
  constructor(private readonly createAccountService: FindAllUsersService) {}

  @Post()
  @ApiOperation({ summary: 'create new account' })
  register(@Body() createAccountDto: any) {
    return this.createAccountService.createAccount(createAccountDto);
  }
}
