/*
  Warnings:

  - Added the required column `note` to the `activity_result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activity" ALTER COLUMN "Score" DROP NOT NULL;

-- AlterTable
ALTER TABLE "activity_result" ADD COLUMN     "note" VARCHAR(256) NOT NULL;
