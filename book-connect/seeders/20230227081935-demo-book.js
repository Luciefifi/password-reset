'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert(
        'Books',
         [
          {
       title: 'To Kill a Mockingbird',
       pageCount: 3293000 ,
       publication:'July 11, 1960',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        title: 'The Great Gatsby',
        pageCount: 30000000 ,
        publication:'April 10, 1925',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: '1984',
        pageCount: 40000000 ,
        publication:'June 8, 1949',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], 
    {}
    );
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Books', null, {});
  }
};
