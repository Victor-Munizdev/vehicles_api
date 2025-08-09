import { DataSourceOptions } from 'typeorm';
import { Vehicle } from './src/vehicles/entities/vehicle.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'crossover.proxy.rlwy.net',
  port: parseInt(process.env.DB_PORT || '44359', 10),
  username: process.env.DB_USERNAME || 'NOME_DO_USUARIO_DO_DB',
  password: process.env.DB_PASSWORD || 'SENHA',
  database: process.env.DB_DATABASE || 'NOME_DO_DB',
  entities: [Vehicle],
  synchronize: true,
  logging: false
};

export default config;