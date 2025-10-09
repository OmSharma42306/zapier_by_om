/*
  Warnings:

  - You are about to drop the column `sortingOrder` on the `Action` table. All the data in the column will be lost.
  - Added the required column `metadata` to the `Action` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Action" DROP COLUMN "sortingOrder",
ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "metadata" JSONB NOT NULL;
