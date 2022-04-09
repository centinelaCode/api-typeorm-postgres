import { DataSource } from 'typeorm';

export const AppDataSourse =new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  port: 5432,
  database: 'typeormdb',
  entities: [],
  logging: true
})