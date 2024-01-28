/*
  Warnings:

  - You are about to drop the column `descricao` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `url_projeto` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `Project` table. All the data in the column will be lost.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_project` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "descricao",
DROP COLUMN "url_projeto",
DROP COLUMN "usuario_id",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "url_project" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;
