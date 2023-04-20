import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length : 250})
    firstName: string

    @Column({length: 250})
    lastName: string

    @Column()
    age: number

}
