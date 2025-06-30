import { ConflictException, Injectable } from "@nestjs/common";
import { ActivateAccountService } from "../application";
import { GetUserDataOutputDto } from "../domain";
import { InjectRepository } from "@nestjs/typeorm";
import { StatusUser, User } from "libs/auth/database/src";
import { Repository } from "typeorm";
import { STATUS_CODE } from "./enums";

@Injectable()
export class ActivateAccountSqlService implements ActivateAccountService{

    constructor(
        @InjectRepository(StatusUser)
        private readonly statusUserRepository: Repository<StatusUser>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async execute(userCode: GetUserDataOutputDto["code"]): Promise<void> {

        const statuses = await this.statusUserRepository.findOneBy({code: STATUS_CODE.ACTIVE})

        if(!statuses) throw new ConflictException(`Status ${String(STATUS_CODE.ACTIVE)} not found`);

        await this.userRepository.update(userCode,{
            status: {id: statuses.id }
        })
    }
}