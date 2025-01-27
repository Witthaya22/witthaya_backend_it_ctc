-- CreateTable
CREATE TABLE "admin_request" (
    "ID" SERIAL NOT NULL,
    "SenderName" VARCHAR(128) NOT NULL,
    "SenderRole" VARCHAR(20) NOT NULL,
    "Title" VARCHAR(256) NOT NULL,
    "Message" TEXT NOT NULL,
    "Status" VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    "ResponseMessage" TEXT,
    "Type" VARCHAR(20) NOT NULL,
    "ActivityID" INTEGER,
    "IsArchived" BOOLEAN NOT NULL DEFAULT false,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_request_pkey" PRIMARY KEY ("ID")
);
