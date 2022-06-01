'use strict';

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

    await queryInterface.bulkInsert('Mentors', [{
      full_name: 'Tleuzhanuly Dinmukhammed',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        full_name: 'Frs asdf',
        createdAt: new Date(),
        updatedAt: new Date(),
      }])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await  queryInterface.bulkDelete('Mentors', null, {})
  }
};
