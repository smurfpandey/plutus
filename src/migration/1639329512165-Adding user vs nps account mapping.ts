import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingUserVsNpsAccountMapping1639329512165 implements MigrationInterface {
    name = 'AddingUserVsNpsAccountMapping1639329512165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nps_account" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "nps_account" ADD CONSTRAINT "UQ_e82a079744caf97448ef15a69d9" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "nps_account" ADD CONSTRAINT "FK_e82a079744caf97448ef15a69d9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nps_account" DROP CONSTRAINT "FK_e82a079744caf97448ef15a69d9"`);
        await queryRunner.query(`ALTER TABLE "nps_account" DROP CONSTRAINT "UQ_e82a079744caf97448ef15a69d9"`);
        await queryRunner.query(`ALTER TABLE "nps_account" DROP COLUMN "userId"`);
    }

}
