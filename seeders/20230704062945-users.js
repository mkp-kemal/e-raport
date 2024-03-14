"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = bcrypt.hashSync("rahasia", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password: password,
          role: "admin",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
