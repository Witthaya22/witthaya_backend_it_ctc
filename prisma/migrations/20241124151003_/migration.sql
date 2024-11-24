/*
  Warnings:

  - You are about to drop the `activities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `activity_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `activity_results` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `oauths` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "activity_details" DROP CONSTRAINT "activity_details_activityId_fkey";

-- DropForeignKey
ALTER TABLE "activity_details" DROP CONSTRAINT "activity_details_userId_fkey";

-- DropForeignKey
ALTER TABLE "activity_results" DROP CONSTRAINT "activity_results_activityId_fkey";

-- DropForeignKey
ALTER TABLE "activity_results" DROP CONSTRAINT "activity_results_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "activity_results" DROP CONSTRAINT "activity_results_userId_fkey";

-- DropForeignKey
ALTER TABLE "admins" DROP CONSTRAINT "admins_userId_fkey";

-- DropForeignKey
ALTER TABLE "oauths" DROP CONSTRAINT "oauths_userId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_departmentId_fkey";

-- DropTable
DROP TABLE "activities";

-- DropTable
DROP TABLE "activity_details";

-- DropTable
DROP TABLE "activity_results";

-- DropTable
DROP TABLE "admins";

-- DropTable
DROP TABLE "departments";

-- DropTable
DROP TABLE "oauths";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "UserID" TEXT NOT NULL,
    "UserFirstName" VARCHAR(64) NOT NULL,
    "UserLastName" VARCHAR(64) NOT NULL,
    "UserPassword" VARCHAR(256) NOT NULL,
    "UserImage" VARCHAR(256),
    "DepartmentID" VARCHAR(64) NOT NULL,
    "Role" VARCHAR(20) NOT NULL DEFAULT 'USER',
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "oauth" (
    "ID" TEXT NOT NULL,
    "UserID" VARCHAR(64) NOT NULL,
    "AccessToken" VARCHAR(2048) NOT NULL,
    "RefreshToken" VARCHAR(2048) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "oauth_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "department" (
    "department_id" TEXT NOT NULL,
    "Name" VARCHAR(64) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "admin" (
    "AdminID" TEXT NOT NULL,
    "AdminPass" VARCHAR(256) NOT NULL,
    "UserID" VARCHAR(64) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("AdminID")
);

-- CreateTable
CREATE TABLE "activity" (
    "ID" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "StartDate" TIMESTAMP(3) NOT NULL,
    "EndDate" TIMESTAMP(3) NOT NULL,
    "Type" VARCHAR(20) NOT NULL,
    "Location" VARCHAR(256),
    "MaxParticipants" INTEGER,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "activity_result" (
    "ID" SERIAL NOT NULL,
    "DepartmentID" TEXT NOT NULL,
    "UserID" TEXT NOT NULL,
    "ActivityID" TEXT NOT NULL,
    "Reservation" BOOLEAN NOT NULL,
    "Status" VARCHAR(20) NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "activity_result_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "activity_detail" (
    "ID" SERIAL NOT NULL,
    "UserID" TEXT NOT NULL,
    "ActivityID" TEXT NOT NULL,
    "Details" TEXT NOT NULL,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "activity_detail_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_UserID_key" ON "user"("UserID");

-- CreateIndex
CREATE UNIQUE INDEX "admin_UserID_key" ON "admin"("UserID");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_DepartmentID_fkey" FOREIGN KEY ("DepartmentID") REFERENCES "department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oauth" ADD CONSTRAINT "oauth_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "user"("UserID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "user"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_result" ADD CONSTRAINT "activity_result_DepartmentID_fkey" FOREIGN KEY ("DepartmentID") REFERENCES "department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_result" ADD CONSTRAINT "activity_result_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "user"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_result" ADD CONSTRAINT "activity_result_ActivityID_fkey" FOREIGN KEY ("ActivityID") REFERENCES "activity"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_detail" ADD CONSTRAINT "activity_detail_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "user"("UserID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_detail" ADD CONSTRAINT "activity_detail_ActivityID_fkey" FOREIGN KEY ("ActivityID") REFERENCES "activity"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
