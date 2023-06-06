-- CreateTable
CREATE TABLE `Vehicle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `policeNumber` VARCHAR(191) NULL,
    `engineNumber` VARCHAR(191) NOT NULL,
    `firstPrice` INTEGER NOT NULL,
    `servicePrice` INTEGER NOT NULL,
    `additionalPrice` INTEGER NOT NULL,
    `statusSold` BOOLEAN NOT NULL DEFAULT false,
    `soldAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
