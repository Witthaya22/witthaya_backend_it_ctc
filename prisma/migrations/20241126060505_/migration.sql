/*
  Warnings:

  - The primary key for the `activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ID` column on the `activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `oauth` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ID` column on the `oauth` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `ActivityID` on the `activity_detail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ActivityID` on the `activity_result` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "activity_detail" DROP CONSTRAINT "activity_detail_ActivityID_fkey";

-- DropForeignKey
ALTER TABLE "activity_result" DROP CONSTRAINT "activity_result_ActivityID_fkey";

-- AlterTable
ALTER TABLE "activity" DROP CONSTRAINT "activity_pkey",
DROP COLUMN "ID",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "activity_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "activity_detail" DROP COLUMN "ActivityID",
ADD COLUMN     "ActivityID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "activity_result" DROP COLUMN "ActivityID",
ADD COLUMN     "ActivityID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "oauth" DROP CONSTRAINT "oauth_pkey",
DROP COLUMN "ID",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "oauth_pkey" PRIMARY KEY ("ID");

-- AddForeignKey
ALTER TABLE "activity_result" ADD CONSTRAINT "activity_result_ActivityID_fkey" FOREIGN KEY ("ActivityID") REFERENCES "activity"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_detail" ADD CONSTRAINT "activity_detail_ActivityID_fkey" FOREIGN KEY ("ActivityID") REFERENCES "activity"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
