'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert(
        'user', 
      [
        {
      id: 1,
      firstName: 'Lucie',
      lastName: 'Niyomutoni',
      email: 'niyomutonilucie@gmail.com',
      createdAt : new Date(),
      updatedAt : new Date(),
        
     },
    { 
      id: 2,
      firstName: 'Luc',
      lastName: 'mutoni',
      email: 'mutonilucie@gmail.com',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    { 
      id: 3,
      firstName: 'Lucy',
      lastName: 'Umutoni',
      email: 'utonilucY@gmail.com',
      createdAt : new Date(),
      updatedAt : new Date(),
    },

    ], 
    {}
    );

    await queryInterface.bulkInsert(
      'channel', 
    [
      {
    id: 1,
    name: 'channel1',
    user_id: 1 ,
    createdAt : new Date(),
    updatedAt : new Date(),
      
   },
   {
    id: 2,
    name: 'channel2',
    user_id: 2 ,
    createdAt : new Date(),
    updatedAt : new Date(),
      
   },

  ], 
  {}
  );

  await queryInterface.bulkInsert(
    'video', 
  [
    {
  id: 1,
  name: 'video1',
  title: 'video1byuser1',
  channel_id: 1 ,
  createdAt : new Date(),
  updatedAt : new Date(),
    
 },
//  {
//   id: 2,
//   name: 'video2',
//   title: 'video2byuser1',
//   channel_id: 1 ,
//   createdAt : new Date(),
//   updatedAt : new Date(),
    
//  },

 {
  id: 3,
  name: 'video3',
  title: 'video1byuser2',
  channel_id: 2   ,
  createdAt : new Date(),
  updatedAt : new Date(),
    
 },

], 
{}
);
    
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
