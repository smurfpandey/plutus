import { MigrationInterface, QueryRunner } from "typeorm";

export class npsAccountUpdateNumericField1629910773640 implements MigrationInterface {
  name = 'npsAccountUpdateNumericField1629910773640'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "totalContribution" TYPE numeric(12,2)`);
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "totalValue" TYPE numeric(12,2)`);
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "returnEarned" TYPE numeric(12,2)`);
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "intermediaryCharges" TYPE numeric(12,2)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "intermediaryCharges" TYPE numeric(2,0)`);
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "returnEarned" TYPE numeric(2,0)`);
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "totalValue" TYPE numeric(2,0)`);
    await queryRunner.query(`ALTER TABLE "public"."nps_account" ALTER COLUMN "totalContribution" TYPE numeric(2,0)`);
  }

}
