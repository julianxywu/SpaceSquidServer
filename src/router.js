import { Router } from 'express';
// import * as Posts from './controllers/post_controller';
import * as Planets from './controllers/planet_controller';
// import * as UserController from './controllers/user_controller';
// import { requireAuth, requireSignin } from './services/passport';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

// your routes will go here
router.route('/planets')
  .get(Planets.getPlanets);

// router.route('/posts/:id')
//   .get(Posts.getPost)
//   .put(requireAuth, Posts.updatePost)
//   .delete(requireAuth, Posts.deletePost);

export default router;
