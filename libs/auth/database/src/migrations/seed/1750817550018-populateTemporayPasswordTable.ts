import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateTemporayPasswordTable1750817550018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO temporary_password ("code_user")
            VALUES
            ((SELECT code FROM users WHERE rut LIKE '77.791.322-0'));
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            TRUNCATE TABLE temporary_password RESTART IDENTITY CASCADE;
        `);
    }

}
