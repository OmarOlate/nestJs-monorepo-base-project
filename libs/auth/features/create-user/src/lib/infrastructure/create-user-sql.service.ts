import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserService } from '../application';
import { CreateUserInputDto } from '../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusUser, User } from '../../../../../database';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserSqlService implements CreateUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(StatusUser)
    private statusUserRepository: Repository<StatusUser>
  ) {}

  async createUser(input: CreateUserInputDto): Promise<void> {
    const userData = await this.userRepository.findOneBy({
      rut: input.rut,
      email: input.email,
    });

    if (userData) throw new ConflictException(`User or email already exists`);

    const userCode = uuidv4();

    const randomPassword = crypto.randomBytes(8).toString('hex');

    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    const INITIAL_STATUS = 'PENDING-PASSWORD';

    const initialStatus = await this.statusUserRepository.findOneBy({
      code: INITIAL_STATUS,
    });

    if (!initialStatus)
      throw new NotFoundException(`Initial status ${INITIAL_STATUS} not found`);

    const newUser = this.userRepository.create({
      code: userCode,
      rut: input.rut,
      name: input.name,
      fatherLastName: input.fatherLastName,
      matherLastName: input.matherLastName,
      email: input.email,
      password: hashedPassword,
      statusId: initialStatus.id,
    });

    await this.userRepository.save(newUser);
  }
}
