import Planet from '../models/planet_model';

// export const createPost = (req, res) => {
//   const post = new Post();
//   post.title = req.body.title;
//   post.tags = req.body.tags;
//   post.content = req.body.content;
//   post.coverUrl = req.body.coverUrl;
//   post.author = req.body.author;
//   post.username = req.user.username;
//   post.save()
//     .then((result) => {
//       res.json({ message: 'Post created!' });
//     })
//     .catch((error) => {
//       res.status(500).json({ error });
//     });
// //  res.send('post should be created and returned');
// };
export const getPlanets = (req, res) => {
  Planet.find({})
    .then((result) => {
      res.json(result);
    });
};
export const getPlanet = (req, res) => {
  Planet.findById(req.params.id)
    .then((result) => {
      res.json(result);
    });
};
// export const deletePost = (req, res) => {
//   Post.findOneAndRemove({ _id: req.params.id })
//     .then((result) => {
//       res.json('Deleted post!');
//     });
// };
// export const updatePost = (req, res) => {
//   Post.findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then((result) => {
//       res.json('Updated post!');
//     });
// };
