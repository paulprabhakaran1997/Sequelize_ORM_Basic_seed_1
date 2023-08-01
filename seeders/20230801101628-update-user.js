'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.bulkInsert('channel', [
          {
            id: 3,
            name: 'channel3',
            user_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 4,
            name: 'channel4',
            user_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ], { transaction: t }),
        queryInterface.bulkInsert('video', [
          {
            id: 4,
            title: 'video4ByUser2',
            channel_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 5,
            title: 'video5ByUser3',
            channel_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ], { transaction: t }),
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.bulkDelete('channel', null, { transaction: t }),
        queryInterface.removeColumn('video', null, { transaction: t })
      ])
    })
  }
};
