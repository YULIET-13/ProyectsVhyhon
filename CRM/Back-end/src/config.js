import  {config}  from "dotenv"

config();

export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST || '192.168.12.36';
export const DB_PORT =process.env.DB_PORT|| 3306;
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_DATABASE = process.env.DB_DATABASE || 'crmvyhon'

export const SERVIDOR_BACKEND = process.env.SERVIDOR_BACKEND ||' http://localhost:3005'
export const SERVICE = process.env.SERVICE ||  'vyhoncrm@outlook.com'
export const USER = process.env.USER || 'vyhoncrm@outlook.com'
export const PASS = process.env.PASS ||  'CrmVyhon2023'
export const SECRET = process.env.SECRET ||  "CLAVESUPERSECRETA"
