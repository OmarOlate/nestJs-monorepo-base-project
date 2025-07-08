import { ConflictException, Injectable } from "@nestjs/common";
import { ValidateTemporaryPasswordService } from "../application";
import { InjectRepository } from "@nestjs/typeorm";
import { TemporaryPassword } from "libs/auth/database/src";
import { Repository } from "typeorm";
import { VerifyTemporaryPasswordRequestDto } from "./dtos";

@Injectable()
export class ValidateTemporaryPasswordSqlService implements ValidateTemporaryPasswordService{

    constructor(
        @InjectRepository(TemporaryPassword)
        private temporaryPasswordRepository: Repository<TemporaryPassword>
    ){}
    async execute(input: VerifyTemporaryPasswordRequestDto): Promise<void> {
        const temporaryPassword = await this.temporaryPasswordRepository.findOneBy({
            codeUser: input.code
        })

        if(!temporaryPassword) throw new ConflictException(`Pending password of user not found`);

        if(temporaryPassword.password !== input.currentPassword) throw new ConflictException(`Credentials error`);
    }
    
}