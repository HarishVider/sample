import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "vider",
    password: "harish",
    database: "vider",
    synchronize: true,
    logging: false,
    entities: [User, Photo],
    migrations: [],
    subscribers: [],
})
