import { DataSource, DataSourceOptions } from "typeorm"
import { config as dotenvConfig } from 'dotenv'
import { registerAs } from "@nestjs/config"

dotenvConfig({ path: './src/.env.development' }) //cargamos el archivo de variables de entorno

//creamos la configuracion de typeorm
const config = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: false,
    logging: true,
}

export default registerAs('typeorm', () => config); //exportamos la configuracion de typeorm para poder usarla en app.module
//con el registerAs le decimos que el nombre de la configuracion sea typeorm y el valor sea la configuracion de typeorm



export const connectionSource = new DataSource(config as DataSourceOptions) //creamos la conexion a la base de datos

