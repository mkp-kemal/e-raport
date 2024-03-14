"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tahuns",
      [
        {
          tahun: "2022-2023",
          kepala_sekolah: "Gita Ria Octafia S.Pd., Gr.",
          nip: "14141241241",
          tgl_raport: new Date(),
          semester: "1",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          tahun: "2022-2023",
          kepala_sekolah: "Gita Ria Octafia S.Pd., Gr.",
          nip: "14141241241",
          tgl_raport: new Date(),
          semester: "2",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tahuns", null, {});
  },
};
