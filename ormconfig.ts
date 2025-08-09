import { DataSourceOptions } from 'typeorm';
import { Vehicle } from './src/vehicles/entities/vehicle.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'crossover.proxy.rlwy.net',
  port: parseInt(process.env.DB_PORT || '44359', 10),
  username: process.env.DB_USERNAME || 'victor_muniz',
  password: process.env.DB_PASSWORD || 'victor_muniz',
  database: process.env.DB_DATABASE || 'victor_muniz_banco',
  entities: [Vehicle],
  synchronize: true,
  logging: false
};

export default config;