import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('temporary_password')
export class TemporaryPassword{
    @PrimaryColumn({name: 'code_user'})
    readonly codeUser: string;

    @Column({name: 'password'})
    readonly password: string;
}