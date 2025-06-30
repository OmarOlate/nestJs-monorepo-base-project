import { Injectable } from "@nestjs/common";
import { DeleteTemporaryPasswordService } from "../application";
import { DeleteTemporaryPasswordDto } from "../domain";
import { InjectRepository } from "@nestjs/typeorm";
import { TemporaryPassword } from "libs/auth/database/src";
import { Repository } from "typeorm";

@Injectable()
export class DeleteTemporaryPasswordSqlService implements DeleteTemporaryPasswordService{

    constructor(
        @InjectRepository(TemporaryPassword)
        private userRepository: Repository<TemporaryPassword>
    ){}

    async execute(input: DeleteTemporaryPasswordDto): Promise<void> {
        await this.userRepository.delete({codeUser: input.code});
    }
}