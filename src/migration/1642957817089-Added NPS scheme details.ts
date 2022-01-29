import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedNPSSchemeDetails1642957817089 implements MigrationInterface {
    name = 'AddedNPSSchemeDetails1642957817089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."nps_scheme_tier_enum" AS ENUM('Tier I', 'Tier II')`);
        await queryRunner.query(`CREATE TYPE "public"."nps_scheme_fundmanager_enum" AS ENUM('HDFC Pension Management Company Limited', 'Aditya Birla Sun Life Pension Management Limited', 'UTI Retirement Solutions Limited', 'SBI Pension Funds Private Limited', 'ICICI Prudential Pension Funds Management Company Limited', 'Reliance Pension Fund', 'Kotak Mahindra Pension Fund Limited', 'LIC Pension Fund')`);
        await queryRunner.query(`CREATE TABLE "nps_scheme" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tier" "public"."nps_scheme_tier_enum" NOT NULL DEFAULT 'Tier I', "fundManager" "public"."nps_scheme_fundmanager_enum" NOT NULL, "allocationPercent" integer NOT NULL, "totalContribution" numeric(12,2) NOT NULL DEFAULT '0', "totalUnits" numeric(12,4) NOT NULL DEFAULT '0', "npsId" uuid, CONSTRAINT "PK_b171656f892764ad9047e3598c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "nps_scheme" ADD CONSTRAINT "FK_e90083c6ac3c090c93386a08078" FOREIGN KEY ("npsId") REFERENCES "nps_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nps_scheme" DROP CONSTRAINT "FK_e90083c6ac3c090c93386a08078"`);
        await queryRunner.query(`DROP TABLE "nps_scheme"`);
        await queryRunner.query(`DROP TYPE "public"."nps_scheme_fundmanager_enum"`);
        await queryRunner.query(`DROP TYPE "public"."nps_scheme_tier_enum"`);
    }

}
