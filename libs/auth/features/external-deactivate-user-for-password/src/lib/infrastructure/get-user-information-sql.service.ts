import { ConflictException, Injectable } from "@nestjs/common";
import { GetUserInformationService } from "../application";
import { ExternalDeactivateUserForPasswordInputDto } from "../domain";
import { GetUserInformationOutputDto } from "../domain/dtos/get-user-information-output.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../database';
import { Repository } from "typeorm";
import { ExternalDeactivateUserForPasswordRequestDto } from "./dtos";
import { GetUserInformationResponseDto } from "./dtos/get-user-information-response.dto";

@Injectable()
export class GetUserInformationSqlService implements GetUserInformationService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async execute(
        input: ExternalDeactivateUserForPasswordRequestDto
    ): Promise<Readonly<GetUserInformationResponseDto>> {
        const userData = await this.userRepository.findOneBy({email: input.email});

        if(!userData) throw new ConflictException(`User not found`);

        return {code: userData.code}
    }
}