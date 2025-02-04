/*
  Warnings:

  - Added the required column `SemesterID` to the `activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activity" ADD COLUMN     "SemesterID" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "semester" (
    "ID" SERIAL NOT NULL,
    "Year" INTEGER NOT NULL,
    "Term" INTEGER NOT NULL,
    "StartDate" TIMESTAMP(3) NOT NULL,
    "EndDate" TIMESTAMP(3) NOT NULL,
    "Status" VARCHAR(20) NOT NULL,
    "Description" TEXT,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "semester_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_SemesterID_fkey" FOREIGN KEY ("SemesterID") REFERENCES "semester"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
