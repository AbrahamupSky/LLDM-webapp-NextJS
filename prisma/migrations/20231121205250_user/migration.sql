/*
  Warnings:

  - Made the column `apellidos` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `colonia` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `domicilio` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `emergencia` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombres` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numero` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `parentesco` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telefono` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "colonia" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "ocupacion" TEXT,
    "zipcode" TEXT,
    "estudios" TEXT,
    "emergencia" TEXT NOT NULL,
    "parentesco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fechaNacim" DATETIME,
    "actividadesExtra" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("actividadesExtra", "apellidos", "colonia", "createdAt", "domicilio", "email", "emergencia", "estudios", "fechaNacim", "id", "nombres", "numero", "ocupacion", "parentesco", "password", "telefono", "username", "zipcode") SELECT "actividadesExtra", "apellidos", "colonia", "createdAt", "domicilio", "email", "emergencia", "estudios", "fechaNacim", "id", "nombres", "numero", "ocupacion", "parentesco", "password", "telefono", "username", "zipcode" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
