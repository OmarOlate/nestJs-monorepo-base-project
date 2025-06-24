import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateModulesTable1750728723931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                INSERT INTO modules ("code", "name") 
                VALUES
                ('ROLES', 'Módulo de roles'),
                ('PERMISSIONS','Módulo de permisos'),
                ('MODULES','Módulo de módulos'),
                ('ROLES-PERMISSIONS','Módulo de roles y permisos'),
                ('USERS-ROLES','Módulo de usuarios y roles');
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                TRUNCATE TABLE modules RESTART IDENTITY CASCADE;
            `
        );
    }

}
