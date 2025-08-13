import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todos')
export class Todo {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({default: false}) //le damos un valor por defecto
    isCompleted: boolean;
}