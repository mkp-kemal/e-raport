"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Ekstrakulikullers",
      [
        {
          nama: "Kepramukaan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Paskibra",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Rohani Islam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "PMR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Drum Band",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Bola Basket",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Ekstrakulikullers", null, {});
  },
};
