import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateUsersTable1750732506305 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                INSERT INTO users ("rut","name","father_last_name","mather_last_name","email","password","status_id","contact_id","type_user_id")
                VALUES
                ('77.791.322-0','Devom','Chile','SA','devomchile@gmail.com','initialPassword',(SELECT id FROM status_user WHERE code LIKE 'PENDING-PASSWORD'),(SELECT id FROM contacts WHERE email LIKE 'devomchile@gmail.com'),(SELECT id FROM type_user WHERE code LIKE 'SUPERADMIN') )
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                TRUNCATE TABLE users RESTART IDENTITY CASCADE;
            `
        );
    }

}
