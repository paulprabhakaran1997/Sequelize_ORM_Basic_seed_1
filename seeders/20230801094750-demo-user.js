'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user',[
      {
        id : 1,
        email : 'user1@test.com',
        username : 'user1',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id : 2,
        email : 'user2@test.com',
        username : 'user2',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id : 3,
        email : 'user3@test.com',
        username : 'user3',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ],{});

    await queryInterface.bulkInsert('channel',[
      {
        id : 1,
        name : 'channel1',
        user_id : 1,        
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id : 2,
        name : 'channel2',
        user_id : 2,        
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ],{});


    await queryInterface.bulkInsert('video',[
      {
        id : 1,
        title : 'video1ByUser1',
        channel_id : 1,        
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id : 2,
        title : 'video2ByUser1',
        channel_id : 1,        
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        id : 3,
        title : 'video3ByUser2',
        channel_id : 2,        
        createdAt : new Date(),
        updatedAt : new Date(),
      },
    ],{});

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
