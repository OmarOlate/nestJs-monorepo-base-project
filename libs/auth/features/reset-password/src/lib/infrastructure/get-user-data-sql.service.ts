import { ConflictException, Injectable } from "@nestjs/common";
import { GetUserDataService } from "../application";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "libs/auth/database/src";
import { GetUserDataRequestDto, GetUserDataResponseDto } from "./dtos";

@Injectable()
export class GetUserDataSqlService implements GetUserDataService{

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async execute(input: GetUserDataRequestDto): Promise<GetUserDataResponseDto> {

        const userData = await this.userRepository.findOne({
            where: {email: input.email},
            relations: ['status']
        });

        if(!userData) throw new ConflictException(`User with email: ${String(input.email)} not found`); 

        return {
            code: userData.code,
            status:  userData.status.code
        }
    }
}