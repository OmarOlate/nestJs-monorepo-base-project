import { Injectable } from "@nestjs/common";
import { ResetPasswordService } from "../application";
import { User } from "libs/auth/database/src";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ResetPasswordSqlRequestDto } from "./dtos";


@Injectable()
export class ResetPasswordSqlService implements ResetPasswordService{

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async resetPassword(input: ResetPasswordSqlRequestDto): Promise<void> {

        const newPassword = await bcrypt.hash(input.newPassword, 15);

        await this.userRepository.update(input.code, {
            password: newPassword,
        });        
    }
    
}