/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `GoogleAuth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuth_userId_key" ON "public"."GoogleAuth"("userId");
