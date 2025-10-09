-- CreateTable
CREATE TABLE "public"."TempWebHooksData" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "webhookData" JSONB NOT NULL,

    CONSTRAINT "TempWebHooksData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."TempWebHooksData" ADD CONSTRAINT "TempWebHooksData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
