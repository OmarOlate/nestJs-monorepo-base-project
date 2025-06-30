import { ConflictException, Injectable } from "@nestjs/common";
import { FindNewUserService } from "../application";
import { FindNewUserOutputDto } from "../domain";
import { NewUserPasswordValidateRequestDto } from "./dtos";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "libs/auth/database";
import { Repository } from "typeorm";

@Injectable()
export class FindNewUserSqlService implements FindNewUserService{
    
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<Readonly<User>>,
    ){}
    
    async execute({email}: NewUserPasswordValidateRequestDto): Promise<Readonly<FindNewUserOutputDto>> {
        const userResponse = await this.userRepository.findOne({
            select: {code: true},
            where: {email}
        })

        if(!userResponse) throw new ConflictException(`User with email: ${String(email)} not found`);

        return {userCode: userResponse.code}
    }
    
}