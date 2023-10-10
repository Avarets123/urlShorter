/*
  Warnings:

  - You are about to drop the `UrlModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UrlModel";

-- CreateTable
CREATE TABLE "url_model" (
    "id" UUID NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "url_model_id_key" ON "url_model"("id");

-- CreateIndex
CREATE UNIQUE INDEX "url_model_title_key" ON "url_model"("title");
