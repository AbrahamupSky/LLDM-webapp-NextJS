-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombres" TEXT,
    "apellidos" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "domicilio" TEXT,
    "colonia" TEXT,
    "telefono" INTEGER,
    "ocupacion" TEXT,
    "zipcode" INTEGER,
    "estudios" TEXT,
    "emergencia" TEXT,
    "parentesco" TEXT,
    "numero" INTEGER,
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
