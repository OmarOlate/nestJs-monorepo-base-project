import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulatePermissionsTable1750729127612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                INSERT INTO permissions ("module_id","code","name")
                VALUES
                ((SELECT id from modules where code like 'MODULES'),'modules:see-modules','Ver módulo de módulos'),
                ((SELECT id from modules where code like 'MODULES'),'modules:create-module','Crear módulo'),
                ((SELECT id from modules where code like 'MODULES'),'modules:delete-module','Eliminar módulo'),
                ((SELECT id from modules where code like 'MODULES'),'modules:update-module','Actualizar módulo'),
                ((SELECT id from modules where code like 'PERMISSIONS'),'permissions:see-permissions','Ver permisos'),
                ((SELECT id from modules where code like 'PERMISSIONS'),'permissions:create-permission','Crear permisos'),
                ((SELECT id from modules where code like 'PERMISSIONS'),'permissions:delete-permission','Eliminar permisos'),
                ((SELECT id from modules where code like 'PERMISSIONS'),'permissions:update-permission','Actualizar permisos'),
                ((SELECT id from modules where code like 'ROLES'),'roles:see-roles','Ver roles'),
                ((SELECT id from modules where code like 'ROLES'),'roles:create-role','Crear rol'),
                ((SELECT id from modules where code like 'ROLES'),'roles:delete-role','Eliminar rol'),
                ((SELECT id from modules where code like 'ROLES'),'roles:update-role','Actualizar rol'),
                ((SELECT id from modules where code like 'ROLES-PERMISSIONS'),'roles-permissions:manage','Gestionar roles y permisos'),
                ((SELECT id from modules where code like 'USERS-ROLES'),'users-roles:manage','Gestionar usuarios y roles');
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                TRUNCATE TABLE permissions RESTART IDENTITY CASCADE;
            `
        );
    }

}
