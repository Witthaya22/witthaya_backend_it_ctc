-- Step 1: Add new columns as nullable first
ALTER TABLE "user"
ADD COLUMN "classAt" VARCHAR(64),
ADD COLUMN "classRoom" VARCHAR(64);

-- Step 2: Update existing rows with default values
UPDATE "user"
SET "classAt" = 'ไม่ระบุ',
    "classRoom" = 'ไม่ระบุ'
WHERE "classAt" IS NULL
   OR "classRoom" IS NULL;

-- Step 3: Now make the columns NOT NULL
ALTER TABLE "user"
ALTER COLUMN "classAt" SET NOT NULL,
ALTER COLUMN "classRoom" SET NOT NULL;

-- Step 4: Add imageActivity column
ALTER TABLE "activity_result"
ADD COLUMN "imageActivity" VARCHAR(512);

-- Step 5: Change Score type
ALTER TABLE "activity"
ALTER COLUMN "Score" SET DATA TYPE DOUBLE PRECISION;
