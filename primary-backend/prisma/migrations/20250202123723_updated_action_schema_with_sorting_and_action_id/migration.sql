/*
  Warnings:

  - You are about to drop the column `sorting` on the `Actions` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Actions` table. All the data in the column will be lost.
  - Added the required column `actionId` to the `Actions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Actions" DROP CONSTRAINT "Actions_typeId_fkey";

-- AlterTable
ALTER TABLE "Actions" DROP COLUMN "sorting",
DROP COLUMN "typeId",
ADD COLUMN     "actionId" TEXT NOT NULL,
ADD COLUMN     "sortingOrder" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Actions" ADD CONSTRAINT "Actions_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "AvilableActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
