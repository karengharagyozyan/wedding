-- CreateEnum
CREATE TYPE "GuestSide" AS ENUM ('TIGRAN', 'KRISTINA');

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "side" "GuestSide";
