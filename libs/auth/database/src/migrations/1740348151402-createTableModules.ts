import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableModules1740348151402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE modules (
      id int PRIMARY KEY AUTO_INCREMENT,
      code varchar(50) NOT NULL,
      name varchar(50) NOT NULL,
      created_at datetime NOT NULL DEFAULT (now()),
      updated_at datetime NOT NULL DEFAULT (now()),
      deleted_at datetime
    );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE modules;`);
  }
}
