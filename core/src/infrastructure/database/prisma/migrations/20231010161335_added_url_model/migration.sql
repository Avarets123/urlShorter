-- CreateTable
CREATE TABLE "UrlModel" (
    "id" UUID NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "UrlModel_id_key" ON "UrlModel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UrlModel_originalUrl_key" ON "UrlModel"("originalUrl");

-- CreateIndex
CREATE UNIQUE INDEX "UrlModel_title_key" ON "UrlModel"("title");
