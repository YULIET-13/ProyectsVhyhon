import {config} from "dotenv";

config()

export const SERVIDOR_BACKEND = process.env.SERVIDOR_BACKEND ||' http://localhost:3005'