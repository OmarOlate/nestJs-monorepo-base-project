import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateStatusUserTable1750548477676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO status_user ("code", "description")
            VALUES
                ('PENDING-PASSWORD','Usuario pendiente de seteo de contraseña'),
                ('ACTIVE','Usuario activo'),
                ('DEACTIVATED','Usuario desactivado'),
                ('SUSPENDED','Usuario suspendido'),
                ('SUSPENDED-PER-PAY', 'Usuario suspendido por pago');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            TRUNCATE TABLE status_user RESTART IDENTITY CASCADE;
        `);
    }

}
