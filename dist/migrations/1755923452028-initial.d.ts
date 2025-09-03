import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Initial1755923452028 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
