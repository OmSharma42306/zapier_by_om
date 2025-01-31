-- CreateTable
CREATE TABLE "Zapruns" (
    "id" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,

    CONSTRAINT "Zapruns_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zapruns" ADD CONSTRAINT "Zapruns_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
