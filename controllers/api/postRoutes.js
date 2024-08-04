const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User
        },
        {
          model: Comment
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create( {
      ...req.body,
      author_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch(err) {
    res.status(400).json(err);
  }
})

// router.post('/:id', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create( {
//       ...req.body,
//       author_id: req.session.user_id,
//     });
//     res.status(200).json(newComment);
//   } catch(err) {
//     res.status(400).json(err);
//   }
// })


module.exports = router;