'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     
    
      await queryInterface.bulkInsert('Authors', 
      [
        
        {
          firstName: ' Jane',
          lastName:  'Austen' ,
          age:41,
          sex:'Female',
          nationality:"English",
          createdAt: new Date(),
          updatedAt: new Date()
         },

         {
          firstName: ' steve',
          lastName:  'harvey' ,
          age:50,
          sex:'Male',
          nationality:"English",
          createdAt: new Date(),
          updatedAt: new Date()
         },



      ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Auhtors', null, {});
     
  }
};
