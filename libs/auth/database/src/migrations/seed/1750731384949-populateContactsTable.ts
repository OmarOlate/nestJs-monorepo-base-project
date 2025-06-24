import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateContactsTable1750731384949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                INSERT INTO contacts ("phone","cellphone","address","city","email","commune_id")
                VALUES
                ('','+56946432453','Av. Providencia 1208, Of. 1603','Santiago','devomchile@gmail.com',(SELECT id from communes where name LIKE 'Providencia'));
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                TRUNCATE TABLE contacts RESTART IDENTITY CASCADE;
            `
        );
    }

}
