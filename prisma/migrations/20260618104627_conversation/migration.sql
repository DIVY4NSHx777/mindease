-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "mood" INTEGER,
ALTER COLUMN "title" DROP NOT NULL;
