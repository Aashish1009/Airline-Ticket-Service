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
    await queryInterface.bulkInsert('Airports', [
       {
         name: 'Kempegowda Airport',
         cityId:5,
         createdAt:new Date(),
         updatedAt:new Date()
       },
       {
        name: 'mysuru Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'mengaluru Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
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
