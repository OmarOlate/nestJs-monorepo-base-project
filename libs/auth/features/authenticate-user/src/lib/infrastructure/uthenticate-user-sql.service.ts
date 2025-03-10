import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateUserService } from '../application';
import { AuthenticateUserInputDto, AuthenticateUserOutputDto } from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../database';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  AuthenticateUserRequestDto,
  AuthenticateUserResponseDto,
} from './dtos';

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

    const isPasswordValid = await bcrypt.compare(
      inputDto.password,
      user.password
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const userData = {
      id: user.id,
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
