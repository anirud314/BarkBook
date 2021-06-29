const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');
const seedPosts = require('./post-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedPosts();

  process.exit(0);
};

seedAll();
