import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthenticateUserService } from '../application';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusUser, User } from '../../../../../database';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  AuthenticateUserRequestDto,
  AuthenticateUserResponseDto,
} from './dtos';
import { STATUS_CODE } from './enums/status-code.enum';

@Injectable()
export class AuthenticateUserSqlService implements AuthenticateUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async authenticate(
    inputDto: AuthenticateUserRequestDto
  ): Promise<Readonly<AuthenticateUserResponseDto>> {
    const user = await this.userRepository.findOne({
      where: { email: inputDto.email },
      relations: ['status'],
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    if (user.status.code === STATUS_CODE.PENDING_PASSWORD)
      throw new ConflictException(`User have pending password status`);

    const isPasswordValid = await bcrypt.compare(
      inputDto.password,
      user.password
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const userData = {
      rut: user.rut,
      code: user.code,
      name: user.name,
      fatherLastName: user.fatherLastName,
      motherLastName: user.matherLastName,
      email: user.email,
      status: user.status.code,
    };

    const token = this.jwtService.sign(userData);
    const data = {
      userData,
      token,
    };
    return data;
  }
}
