// import the functions and then call them
const sequelize = require("../config/connection");

const seedUsers = require('./userSeed');
const seedPosts = require('./postSeed');
const seedComments = require('./commentSeed');


const seedAll =  async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();
}

seedAll();