'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelNumber: {
        type: Sequelize.STRING,
        allowNull:false ,
      },
      Capacity: {
        type: Sequelize.INTEGER,
        allowNull:false ,
        defaultValue:200
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};