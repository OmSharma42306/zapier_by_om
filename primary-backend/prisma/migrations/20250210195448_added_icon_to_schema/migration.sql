/*
  Warnings:

  - Added the required column `image` to the `AvilableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Avilabletriggers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvilableActions" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Avilabletriggers" ADD COLUMN     "image" TEXT NOT NULL;
