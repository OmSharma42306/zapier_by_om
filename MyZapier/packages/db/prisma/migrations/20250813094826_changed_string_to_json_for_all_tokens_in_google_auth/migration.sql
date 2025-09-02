/*
  Warnings:

  - Changed the type of `allTokens` on the `GoogleAuth` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."GoogleAuth" DROP COLUMN "allTokens",
ADD COLUMN     "allTokens" JSONB NOT NULL;
