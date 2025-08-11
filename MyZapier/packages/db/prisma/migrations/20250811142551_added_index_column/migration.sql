/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `ZapRuns` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."ZapRuns" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "ZapRuns_index_key" ON "public"."ZapRuns"("index");
