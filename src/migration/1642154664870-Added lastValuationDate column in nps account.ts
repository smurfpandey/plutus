import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedLastValuationDateColumnInNpsAccount1642154664870 implements MigrationInterface {
    name = 'AddedLastValuationDateColumnInNpsAccount1642154664870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nps_account" ADD "lastValuationDate" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nps_account" DROP COLUMN "lastValuationDate"`);
    }

}
