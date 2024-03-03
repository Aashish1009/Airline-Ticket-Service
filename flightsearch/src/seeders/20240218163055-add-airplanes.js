'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
       {
         modelNumber: 'Boeing 707',
          capacity:300,
          createdAt:new Date(),
          updatedAt:new Date(),
       },
       {
        modelNumber: 'Airbus 380',
         capacity:350,
         createdAt:new Date(),
         updatedAt:new Date(),
      },
      {
        modelNumber: 'Indigo 685',
         capacity:200,
         createdAt:new Date(),
         updatedAt:new Date(),
      },
      {
        modelNumber: 'Spicejet 690',
        capacity:200,
         createdAt:new Date(),
         updatedAt:new Date(),
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
