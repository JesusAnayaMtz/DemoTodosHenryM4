import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity('users')
export class User {
    //usamos uuid para generar un id unico

    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column()
    name: string;

    @Column()
    email:string;

    @Column()
    createdAt: string;
}