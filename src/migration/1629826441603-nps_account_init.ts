import {MigrationInterface, QueryRunner} from "typeorm";

export class npsAccountInit1629826441603 implements MigrationInterface {
    name = 'npsAccountInit1629826441603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nps_account" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "pran" character varying(16) NOT NULL,
          "subscriberName" character varying(300) NOT NULL,
          "isActive" boolean NOT NULL DEFAULT true,
          "totalContribution" numeric(2) NOT NULL DEFAULT '0',
          "totalValue" numeric(2) NOT NULL DEFAULT '0',
          "returnEarned" numeric(2) NOT NULL DEFAULT '0',
          "intermediaryCharges" numeric(2) NOT NULL DEFAULT '0',
          "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
          "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
          CONSTRAINT "PK_dacdc3adb95f240a25ed5e8c22b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nps_account"`);
    }

}
