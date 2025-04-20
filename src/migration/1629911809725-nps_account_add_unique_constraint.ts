import {MigrationInterface, QueryRunner} from "typeorm";

export class npsAccountAddUniqueConstraint1629911809725 implements MigrationInterface {
    name = 'npsAccountAddUniqueConstraint1629911809725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."nps_account" ADD CONSTRAINT "UQ_47ae8304dc38d1001b16fd953d0" UNIQUE ("pran")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."nps_account" DROP CONSTRAINT "UQ_47ae8304dc38d1001b16fd953d0"`);
    }

}
