import {MigrationInterface, QueryRunner} from "typeorm";

export class updateAssetclassEnumValue1643479523457 implements MigrationInterface {
    name = 'updateAssetclassEnumValue1643479523457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."nps_scheme_assetclass_enum" RENAME TO "nps_scheme_assetclass_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."nps_scheme_assetclass_enum" AS ENUM('Equity (E)', 'Corporate Bonds (C)', 'Government Securities (G)', 'Alternative Assets (A)')`);
        await queryRunner.query(`ALTER TABLE "nps_scheme" ALTER COLUMN "assetClass" TYPE "public"."nps_scheme_assetclass_enum" USING "assetClass"::"text"::"public"."nps_scheme_assetclass_enum"`);
        await queryRunner.query(`DROP TYPE "public"."nps_scheme_assetclass_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."nps_scheme_assetclass_enum_old" AS ENUM('Equity', 'Corporate Bonds', 'Government Securities', 'Alternative Assets')`);
        await queryRunner.query(`ALTER TABLE "nps_scheme" ALTER COLUMN "assetClass" TYPE "public"."nps_scheme_assetclass_enum_old" USING "assetClass"::"text"::"public"."nps_scheme_assetclass_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."nps_scheme_assetclass_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."nps_scheme_assetclass_enum_old" RENAME TO "nps_scheme_assetclass_enum"`);
    }

}
