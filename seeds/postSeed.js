const { Post } = require('../models');

const postData = [
  {
    "author_id": 1,
    "title": "Awesome Post",
    "body": "Words are written here for an awesome post"
  },
  {
    "author_id": 2,
    "title": "So Interesting",
    "body": "This post is so interesting, that you decided to read it. You have iffy taste."
  },
  {
    "author_id": 3,
    "title": "Just Say Something",
    "body": "If you don't know what to say, just say something. Or just say nothing. It doesn't actually matter most of the time."
  }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts