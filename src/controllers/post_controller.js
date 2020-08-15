import Post from '../models/post_model';

export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.coverUrl = req.body.coverUrl;
  post.author = req.body.author;
  post.username = req.user.username;
  post.save()
    .then((result) => {
      res.json({ message: 'Post created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
//  res.send('post should be created and returned');
};
export const getPosts = (req, res) => {
//   res.send(Post.find({}));
  Post.find({})
    .then((result) => {
      result.sort((post1, post2) => {
        return post2.createdAt - post1.createdAt; // newest posts to show up first
      });
      res.json(result);
    });
};
export const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((result) => {
      res.json(result);
    });
};
export const deletePost = (req, res) => {
  Post.findOneAndRemove({ _id: req.params.id })
    .then((result) => {
      res.json('Deleted post!');
    });
};
export const updatePost = (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((result) => {
      res.json('Updated post!');
    });
};
