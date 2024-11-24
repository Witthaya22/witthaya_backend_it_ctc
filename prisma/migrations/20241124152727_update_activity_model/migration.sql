/*
  Warnings:

  - Added the required column `Images` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Score` to the `activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activity" ADD COLUMN     "Images" JSONB NOT NULL,
ADD COLUMN     "Score" INTEGER NOT NULL;
