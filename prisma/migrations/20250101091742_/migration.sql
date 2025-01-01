/*
  Warnings:

  - You are about to drop the `oauth` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "oauth" DROP CONSTRAINT "oauth_UserID_fkey";

-- AlterTable
ALTER TABLE "activity_detail" ADD COLUMN     "IsApproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ReviewNote" TEXT,
ADD COLUMN     "ReviewedBy" VARCHAR(64);

-- DropTable
DROP TABLE "oauth";
