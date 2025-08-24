import { DataSource, DataSourceOptions } from "typeorm"
import { config as dotenvConfig } from 'dotenv'
import { registerAs } from "@nestjs/config"

dotenvConfig({ path: './src/.env.development' }) //cargamos el archivo de variables de entorno

//creamos la configuracion de typeorm
const config = {
  type: "postgres",
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  autoLoadEntities: true, //Carga las entidades automaricamente siempre que este en true
  synchronize: true, //sincronica la base de datos y si es true crea la base de datos y las tablas
  logging: true,
  //primero indicamos donde estan las entidades
  entities: ["dist/**/*.entity{.ts,.js}"], //la ruta donde estan las entidades y deben tener la extension .entity asi como el tipo ts o js
  migrations: ["dist/migrations/*{.js,.ts}"], //la ruta donde estan las migraciones y deben tener la extension .ts o js
};

export default registerAs('typeorm', () => config); //exportamos la configuracion de typeorm para poder usarla en app.module
//con el registerAs le decimos que el nombre de la configuracion sea typeorm y el valor sea la configuracion de typeorm



export const connectionSource = new DataSource(config as DataSourceOptions) //creamos la conexion a la base de datos solo se usa con el cli

