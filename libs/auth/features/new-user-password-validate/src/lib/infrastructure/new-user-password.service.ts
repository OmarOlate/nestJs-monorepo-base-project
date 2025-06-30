import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { NewUserPasswordValidateService } from "../application";
import { NewUserPasswordValidateInputDto } from "../domain";
import { InjectRepository } from '@nestjs/typeorm';
import { TemporaryPassword, User } from '../../../../../database';
import { Repository } from "typeorm";
import { NewUserPasswordRequestDto } from "./dtos";

@Injectable()
export class NewUserPasswordSqlService implements NewUserPasswordValidateService{
    
    constructor(
        @InjectRepository(TemporaryPassword)
        private readonly temporaryPasswordRepository:  Repository<Readonly<TemporaryPassword>>
    ){}
    
    async execute(input: NewUserPasswordRequestDto): Promise<void> {
        const validatePassword = await this.temporaryPasswordRepository.findOne({
            where: {
                codeUser: input.userCode
            }
        });

        if(!validatePassword) throw new ConflictException(`Temporary password for user ${String(input.userCode)} not found`);

        if(validatePassword.password !== input.password) throw new UnauthorizedException(`Invalid credentials`);
    }
}