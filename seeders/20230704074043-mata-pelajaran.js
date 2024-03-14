'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MataPelajarans', [
      {
        kelompok: "A",
        kode: "IPA",
        nama: "Ilmu Pengetahun Alam",
        nilaikkm: 75,
        // KelasId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        kelompok: "A",
        kode: "IPS",
        nama: "Ilmu Pengetahun Sosial",
        nilaikkm: 75,
        // KelasId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MataPelajarans', null, {});
  }
};
