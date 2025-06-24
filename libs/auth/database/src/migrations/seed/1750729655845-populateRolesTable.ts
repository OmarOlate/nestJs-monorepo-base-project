import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateRolesTable1750729655845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                INSERT INTO roles ("code","name")
                VALUES
                ('SUPERADMIN','Super admin');
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `TRUNCATE TABLE roles RESTART IDENTITY CASCADE;`
        );
    }

}
