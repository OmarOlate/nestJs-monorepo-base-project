import { IsString } from "class-validator";
import { NewUserPasswordValidateInputDto } from "../../domain";
import { ApiProperty } from '@nestjs/swagger';

export class NewUserPasswordValidateRequestDto implements NewUserPasswordValidateInputDto{
    @ApiProperty({
        description: 'user email',
        example: 'user@example.com'
    })
    @IsString()
    email!: string;

    @ApiProperty({
        description: 'user password',
        example: '*******'
    })
    @IsString()
    password!: string;
}