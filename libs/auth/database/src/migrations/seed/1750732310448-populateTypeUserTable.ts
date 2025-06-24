import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateTypeUserTable1750732310448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                INSERT INTO type_user ("code","description")
                VALUES
                ('SUPERADMIN','Super admin'),
                ('ADMIN','Administrador'),
                ('USER','Usuario');
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                TRUNCATE TABLE type_user RESTART IDENTITY CASCADE;
            `
        );
    }

}
