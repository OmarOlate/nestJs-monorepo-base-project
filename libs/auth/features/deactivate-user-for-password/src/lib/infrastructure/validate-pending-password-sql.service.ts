import { Injectable } from "@nestjs/common";
import { ValidatePendingPasswordService } from "../application";
import { InjectRepository } from "@nestjs/typeorm";
import { TemporaryPassword } from "libs/auth/database";
import { Repository } from "typeorm";
import { DeactivateUserForPasswordRequestDto } from "./dtos";

@Injectable()
export class ValidatePendingPasswordSqlService implements ValidatePendingPasswordService{

    constructor(
        @InjectRepository(TemporaryPassword)
        private readonly temporaryPaswordRepository: Repository<TemporaryPassword>
    ){}
    async execute(input: DeactivateUserForPasswordRequestDto): Promise<void> {

        const temporaryPasswordData = await this.temporaryPaswordRepository.findOneBy({codeUser: input.userCode})

        if(temporaryPasswordData){
            this.temporaryPaswordRepository.remove(temporaryPasswordData);
        } 

    }
}