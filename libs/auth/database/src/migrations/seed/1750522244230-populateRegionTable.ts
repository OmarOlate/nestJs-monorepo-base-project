import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateRegionTable1750522244230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO regions ("name", "ordinal", "region_number", "region_iso", "order") VALUES 
        ('Arica y Parinacota','XV', 15, 'CL-AP', 1),
        ('Tarapacá','I', 1, 'CL-TA', 2),
        ('Antofagasta','II', 2, 'CL-AN', 3),
        ('Atacama','III', 3, 'CL-AT', 4),
        ('Coquimbo','IV', 4, 'CL-CO', 5),
        ('Valparaiso','V', 5, 'CL-VS', 6),
        ('Metropolitana de Santiago','RM', 13,'CL-RM', 7),
        ('Libertador General Bernardo O''Higgins','VI', 6, 'CL-LI', 8),
        ('Maule','VII', 7, 'CL-ML', 9),
        ('Ñuble','XVI', 16, 'CL-NB', 10),
        ('Biobío','VIII', 8, 'CL-BI', 11),
        ('La Araucanía','IX', 9, 'CL-AR', 12),
        ('Los Ríos','XIV', 14, 'CL-LR', 13),
        ('Los Lagos','X', 10, 'CL-LL', 14),
        ('Aisén del General Carlos Ibáñez del Campo','XI', 11, 'CL-AI', 15),
        ('Magallanes y de la Antártica Chilena','XII', 12, 'CL-MA', 16);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            TRUNCATE TABLE regions RESTART IDENTITY CASCADE;
        `);
    }

}
