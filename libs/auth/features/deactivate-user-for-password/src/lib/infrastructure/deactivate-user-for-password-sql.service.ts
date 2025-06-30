import { ConflictException, Injectable } from "@nestjs/common";
import { DeactivateUserForPasswordService } from "../application";
import { InjectRepository } from "@nestjs/typeorm";
import { StatusUser, User } from "libs/auth/database";
import { Repository } from "typeorm";
import { UserStatusEnum } from '../../../../../enums/user-status.enum';
import { DeactivateUserForPasswordRequestDto } from "./dtos";


@Injectable()
export class DeactivateUserForPasswordSqlService implements DeactivateUserForPasswordService{

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(StatusUser)
        private readonly statusUserRepository: Repository<StatusUser>
    ){}


    async execute(input: DeactivateUserForPasswordRequestDto): Promise<void> {

        const statusUserData = await this.statusUserRepository.findOneBy({code: UserStatusEnum.PENDING_PASSWORD})

        if(!statusUserData) throw new ConflictException(`Status user ${String(UserStatusEnum.PENDING_PASSWORD)} not found`);

        await this.userRepository.update(input.userCode,{status:{id: statusUserData.id}});
    }
}