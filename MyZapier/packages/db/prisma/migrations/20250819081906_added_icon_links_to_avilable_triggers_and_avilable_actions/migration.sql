/*
  Warnings:

  - Added the required column `actionIcon` to the `AvilableActions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triggerIcon` to the `Avilabletriggers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."AvilableActions" ADD COLUMN     "actionIcon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Avilabletriggers" ADD COLUMN     "triggerIcon" TEXT NOT NULL;
