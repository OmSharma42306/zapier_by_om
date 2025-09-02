/*
  Warnings:

  - Added the required column `allTokens` to the `GoogleAuth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."GoogleAuth" ADD COLUMN     "allTokens" TEXT NOT NULL;
