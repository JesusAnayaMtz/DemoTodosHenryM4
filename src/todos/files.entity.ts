import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('files')
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    mimeType: string;

    @Column({type: 'byte'})
    data: Buffer;
}