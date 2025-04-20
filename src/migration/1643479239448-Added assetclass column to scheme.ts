import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedAssetclassColumnToScheme1643479239448 implements MigrationInterface {
    name = 'AddedAssetclassColumnToScheme1643479239448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."nps_scheme_assetclass_enum" AS ENUM('Equity', 'Corporate Bonds', 'Government Securities', 'Alternative Assets')`);
        await queryRunner.query(`ALTER TABLE "nps_scheme" ADD "assetClass" "public"."nps_scheme_assetclass_enum" NOT NULL`);

        await queryRunner.query(`ALTER TYPE "public"."nps_scheme_fundmanager_enum" RENAME TO "nps_scheme_fundmanager_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."nps_scheme_fundmanager_enum" AS ENUM('HDFC Pension Management Company Limited', 'Aditya Birla Sun Life Pension Management Limited', 'UTI Retirement Solutions Limited', 'SBI Pension Funds Private Limited', 'ICICI Prudential Pension Funds Management Company Limited', 'Kotak Mahindra Pension Fund Limited', 'LIC Pension Fund')`);
        await queryRunner.query(`ALTER TABLE "nps_scheme" ALTER COLUMN "fundManager" TYPE "public"."nps_scheme_fundmanager_enum" USING "fundManager"::"text"::"public"."nps_scheme_fundmanager_enum"`);
        await queryRunner.query(`DROP TYPE "public"."nps_scheme_fundmanager_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."nps_scheme_fundmanager_enum_old" AS ENUM('HDFC Pension Management Company Limited', 'Aditya Birla Sun Life Pension Management Limited', 'UTI Retirement Solutions Limited', 'SBI Pension Funds Private Limited', 'ICICI Prudential Pension Funds Management Company Limited', 'Reliance Pension Fund', 'Kotak Mahindra Pension Fund Limited', 'LIC Pension Fund')`);
        await queryRunner.query(`ALTER TABLE "nps_scheme" ALTER COLUMN "fundManager" TYPE "public"."nps_scheme_fundmanager_enum_old" USING "fundManager"::"text"::"public"."nps_scheme_fundmanager_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."nps_scheme_fundmanager_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."nps_scheme_fundmanager_enum_old" RENAME TO "nps_scheme_fundmanager_enum"`);

        await queryRunner.query(`ALTER TABLE "nps_scheme" DROP COLUMN "assetClass"`);
        await queryRunner.query(`DROP TYPE "public"."nps_scheme_assetclass_enum"`);
    }

}
