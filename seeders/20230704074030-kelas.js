"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Kelas",
      [
        {
          tingkat: "1",
          nama: "1A",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "1",
          nama: "1B",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "2",
          nama: "2A",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "2",
          nama: "2B",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "3",
          nama: "3A",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "3",
          nama: "3B",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "4",
          nama: "4",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "5",
          nama: "5",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tingkat: "6",
          nama: "6",
          kouta: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kelas", null, {});
  },
};
