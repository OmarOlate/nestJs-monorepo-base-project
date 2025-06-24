import { MigrationInterface, QueryRunner } from 'typeorm';


// DROP SCHEMA public CASCADE;
// CREATE SCHEMA public;
export class InitialSchema1750517146899 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);

    await queryRunner.query(`
      CREATE TABLE "modules" (
        "id" SERIAL PRIMARY KEY,
        "code" varchar(50) NOT NULL,
        "name" varchar(50) NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "permissions" (
        "id" SERIAL PRIMARY KEY,
        "module_id" int NOT NULL,
        "code" varchar(50) NOT NULL,
        "name" varchar(50) NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "roles" (
        "id" SERIAL PRIMARY KEY,
        "code" varchar(50) NOT NULL,
        "name" varchar(50) NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "roles_permissions" (
        "role_id" int,
        "permission_id" int
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "regions" (
        "id" SERIAL PRIMARY KEY,
        "name" varchar(50) NOT NULL,
        "ordinal" varchar(10) NOT NULL,
        "region_number" int NOT NULL,
        "region_iso" varchar(10) NOT NULL,
        "order" int UNIQUE NOT NULL
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "provinces" (
        "id" SERIAL PRIMARY KEY,
        "name" varchar(50) NOT NULL,
        "region_id" int
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "communes" (
        "id" SERIAL PRIMARY KEY,
        "name" varchar(50) NOT NULL,
        "code" int NOT NULL,
        "province_id" int
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "contacts" (
        "id" SERIAL PRIMARY KEY,
        "phone" varchar(15),
        "cellphone" varchar(15),
        "address" varchar(50),
        "city" varchar(100),
        "email" varchar(200),
        "commune_id" int
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "status_user" (
        "id" SERIAL PRIMARY KEY,
        "code" varchar(50) NOT NULL,
        "description" varchar(255)
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "type_user" (
        "id" SERIAL PRIMARY KEY,
        "code" varchar(10) NOT NULL,
        "description" varchar(200)
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" SERIAL PRIMARY KEY,
        "code" varchar(50) NOT NULL DEFAULT uuid_generate_v4(),
        "rut" varchar(12) UNIQUE,
        "name" varchar(100) NOT NULL,
        "father_last_name" varchar(100) NOT NULL,
        "mather_last_name" varchar(100) NOT NULL,
        "email" varchar(100) UNIQUE NOT NULL,
        "password" varchar(255) NOT NULL,
        "status_id" int,
        "contact_id" int,
        "type_user_id" int,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP
      );
    `);

    await queryRunner.query(`
      CREATE TABLE "users_roles" (
        "user_id" int,
        "role_id" int
      );
    `);

    // Foreign Keys
    await queryRunner.query(`
      ALTER TABLE "permissions" ADD CONSTRAINT "FK_permissions_module" FOREIGN KEY ("module_id") REFERENCES "modules" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_roles_permissions_role" FOREIGN KEY ("role_id") REFERENCES "roles" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_roles_permissions_permission" FOREIGN KEY ("permission_id") REFERENCES "permissions" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "provinces" ADD CONSTRAINT "FK_provinces_region" FOREIGN KEY ("region_id") REFERENCES "regions" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "communes" ADD CONSTRAINT "FK_communes_province" FOREIGN KEY ("province_id") REFERENCES "provinces" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "contacts" ADD CONSTRAINT "FK_contacts_commune" FOREIGN KEY ("commune_id") REFERENCES "communes" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "users" ADD CONSTRAINT "FK_users_status" FOREIGN KEY ("status_id") REFERENCES "status_user" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "users" ADD CONSTRAINT "FK_users_contact" FOREIGN KEY ("contact_id") REFERENCES "contacts" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "users" ADD CONSTRAINT "FK_users_type_user" FOREIGN KEY ("type_user_id") REFERENCES "type_user" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "users_roles" ADD CONSTRAINT "FK_users_roles_user" FOREIGN KEY ("user_id") REFERENCES "users" ("id");
    `);

    await queryRunner.query(`
      ALTER TABLE "users_roles" ADD CONSTRAINT "FK_users_roles_role" FOREIGN KEY ("role_id") REFERENCES "roles" ("id");
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Aquí deberías hacer DROP de las tablas en orden inverso para rollback
    await queryRunner.query(`DROP TABLE IF EXISTS "users_roles"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "users"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "type_user"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "status_user"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "contacts"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "communes"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "provinces"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "regions"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "roles_permissions"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "roles"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "permissions"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "modules"`);
  }
}
