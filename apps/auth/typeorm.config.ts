// apps/auth/typeorm.config.ts
require('dotenv').config();
const { DataSource } = require('typeorm');
const path = require('path');

module.exports = new DataSource({
  type: 'postgres',
  url: process.env['DATABASE_URL'],
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  entities: [
    path.join(
      __dirname,
      '../../libs/auth/database/src/entities/**/*.entity.{ts,js}'
    ),
  ],
  migrations: [
    path.join(
      __dirname,
      '../../libs/auth/database/src/migrations/schema/*.{ts,js}'
    ),
    path.join(
      __dirname,
      '../../libs/auth/database/src/migrations/seed/*.{ts,js}'
    ),
    path.join(
      __dirname,
      '../../libs/auth/database/src/migrations/views/*.{ts,js}'
    ),
  ],
  synchronize: false,
});
