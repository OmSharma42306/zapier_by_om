/*
  Warnings:

  - Added the required column `triggerId` to the `Zap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `ZapRuns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "triggerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ZapRuns" ADD COLUMN     "metadata" JSONB NOT NULL;
