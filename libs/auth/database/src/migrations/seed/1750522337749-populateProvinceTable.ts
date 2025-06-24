import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateProvinceTable1750522337749 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO provinces ("name", "region_id") VALUES
        ('Arica', (SELECT id FROM regions WHERE ordinal = 'XV')),
        ('Parinacota', (SELECT id FROM regions WHERE ordinal = 'XV')),
        ('Iquique', (SELECT id FROM regions WHERE ordinal = 'I')),
        ('Tamarugal', (SELECT id FROM regions WHERE ordinal = 'I')),
        ('Antofagasta', (SELECT id FROM regions WHERE ordinal = 'II')),
        ('El Loa', (SELECT id FROM regions WHERE ordinal = 'II')),
        ('Tocopilla', (SELECT id FROM regions WHERE ordinal = 'II')),
        ('Copiapó', (SELECT id FROM regions WHERE ordinal = 'III')),
        ('Chañaral', (SELECT id FROM regions WHERE ordinal = 'III')),
        ('Huasco', (SELECT id FROM regions WHERE ordinal = 'III')),
        ('Elqui', (SELECT id FROM regions WHERE ordinal = 'IV')),
        ('Choapa', (SELECT id FROM regions WHERE ordinal = 'IV')),
        ('Limarí', (SELECT id FROM regions WHERE ordinal = 'IV')),
        ('Valparaíso', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('Isla de Pascua', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('Los Andes', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('Petorca', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('Quillota', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('San Antonio', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('San Felipe de Aconcagua', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('Marga Marga', (SELECT id FROM regions WHERE ordinal = 'V')),
        ('Cachapoal', (SELECT id FROM regions WHERE ordinal = 'VI')),
        ('Cardenal Caro', (SELECT id FROM regions WHERE ordinal = 'VI')),
        ('Colchagua', (SELECT id FROM regions WHERE ordinal = 'VI')),
        ('Talca', (SELECT id FROM regions WHERE ordinal = 'VII')),
        ('Cauquenes', (SELECT id FROM regions WHERE ordinal = 'VII')),
        ('Curicó', (SELECT id FROM regions WHERE ordinal = 'VII')),
        ('Linares', (SELECT id FROM regions WHERE ordinal = 'VII')),
        ('Diguillín', (SELECT id FROM regions WHERE ordinal = 'XVI')),
        ('Itata', (SELECT id FROM regions WHERE ordinal = 'XVI')),
        ('Punilla', (SELECT id FROM regions WHERE ordinal = 'XVI')),
        ('Concepción', (SELECT id FROM regions WHERE ordinal = 'VIII')),
        ('Arauco', (SELECT id FROM regions WHERE ordinal = 'VIII')),
        ('BioBío', (SELECT id FROM regions WHERE ordinal = 'VIII')),
        ('Cautín', (SELECT id FROM regions WHERE ordinal = 'IX')),
        ('Malleco', (SELECT id FROM regions WHERE ordinal = 'IX')),
        ('Valdivia', (SELECT id FROM regions WHERE ordinal = 'XIV')),
        ('Ranco', (SELECT id FROM regions WHERE ordinal = 'XIV')),
        ('Llanquihue', (SELECT id FROM regions WHERE ordinal = 'X')),
        ('Chiloé', (SELECT id FROM regions WHERE ordinal = 'X')),
        ('Osorno', (SELECT id FROM regions WHERE ordinal = 'X')),
        ('Palena', (SELECT id FROM regions WHERE ordinal = 'X')),
        ('Coyhaique', (SELECT id FROM regions WHERE ordinal = 'XI')),
        ('Aisén', (SELECT id FROM regions WHERE ordinal = 'XI')),
        ('Capitán Pratt', (SELECT id FROM regions WHERE ordinal = 'XI')),
        ('General Carrera', (SELECT id FROM regions WHERE ordinal = 'XI')),
        ('Magallanes', (SELECT id FROM regions WHERE ordinal = 'XII')),
        ('Antártica Chilena', (SELECT id FROM regions WHERE ordinal = 'XII')),
        ('Tierra del Fuego', (SELECT id FROM regions WHERE ordinal = 'XII')),
        ('Última Esperanza', (SELECT id FROM regions WHERE ordinal = 'XII')),
        ('Santiago', (SELECT id FROM regions WHERE ordinal = 'RM')),
        ('Cordillera', (SELECT id FROM regions WHERE ordinal = 'RM')),
        ('Chacabuco', (SELECT id FROM regions WHERE ordinal = 'RM')),
        ('Maipo', (SELECT id FROM regions WHERE ordinal = 'RM')),
        ('Melipilla', (SELECT id FROM regions WHERE ordinal = 'RM')),
        ('Talagante', (SELECT id FROM regions WHERE ordinal = 'RM'));
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM provinces RESTART IDENTITY CASCADE`);
  }
}
