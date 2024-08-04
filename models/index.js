const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'author_id'
})

Post.belongsTo(User, {
  foreignKey: 'author_id'
})

Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

//comments should have an author

module.exports = { User, Post, Comment };
// next do seeds, make a test route