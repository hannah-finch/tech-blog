const { User } = require('../models');

const userData = [
  {
    "username": "Hannah",
    "password": "password"
  },
  {
    "username": "Emmalyn",
    "password": "password"
  },
  {
    "username": "Isaac",
    "password": "password"
  }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers