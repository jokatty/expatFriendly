"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("experiences", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      experience: {
        type: Sequelize.STRING,
      },
      user_id: {
        type:Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("experiences");
  },
};