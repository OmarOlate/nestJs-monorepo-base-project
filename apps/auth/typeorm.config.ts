// apps/auth/typeorm.config.ts
const { DataSource } = require('typeorm');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [path.join(__dirname, '../../libs/auth/database/src/entities/**/*.entity.ts')],
  migrations: [
    path.join(__dirname, '../../libs/auth/database/src/migrations/schema/*.ts'),
    path.join(__dirname, '../../libs/auth/database/src/migrations/seed/*.ts'),
    path.join(__dirname, '../../libs/auth/database/src/migrations/views/*.ts'),
  ],
  synchronize: false,
});
