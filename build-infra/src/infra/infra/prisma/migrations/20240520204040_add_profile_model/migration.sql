/*
  Warnings:

  - You are about to drop the column `amount` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `transactionDate` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Template` table. All the data in the column will be lost.
  - Added the required column `command` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_userId_fkey";

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "amount",
DROP COLUMN "currency",
DROP COLUMN "transactionDate",
DROP COLUMN "userId",
ADD COLUMN     "command" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "status" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
