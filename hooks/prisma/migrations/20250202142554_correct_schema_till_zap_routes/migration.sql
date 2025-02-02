/*
  Warnings:

  - You are about to drop the column `typeId` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the `Actions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `triggerId` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Actions" DROP CONSTRAINT "Actions_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Actions" DROP CONSTRAINT "Actions_zapId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_typeId_fkey";

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "typeId",
ADD COLUMN     "triggerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Actions";

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,
    "sortingOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Avilabletriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "AvilableActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
