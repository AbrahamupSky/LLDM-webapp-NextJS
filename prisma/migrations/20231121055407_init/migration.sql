-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "colonia" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,
    "ocupacion" TEXT,
    "zipcode" INTEGER,
    "estudios" TEXT,
    "emergencia" TEXT NOT NULL,
    "parentesco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "fechaNacim" DATETIME,
    "actividadesExtra" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
