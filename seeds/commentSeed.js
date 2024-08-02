const { Comment } = require('../models');

const commentData = [
  {
    "author_id": 1,
    "body": "This post is awesome",
    "post_id": 1
  },
  {
    "author_id": 2,
    "body": "IDK I think this post sucks",
    "post_id": 1
  },
  {
    "author_id": 3,
    "body": "Hmmm, interesting",
    "post_id": 2
  }
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments