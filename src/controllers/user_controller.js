import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import User from '../models/user_model';

dotenv.config({ silent: true });

// encodes a new token for a user object
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

// eslint-disable-next-line consistent-return
export const signup = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;
  const { username } = req.body;
  if (!email || !password || !username) {
    return res.status(422).send('You must provide email and password');
  }

  // TODO -- Collaborated with Alex Feng

  User.find({ email }, (error, result) => {
    if (error) {
      res.status(500).json({ error });
    }
    if (result.length !== 0) { // Email already exists
      res.status(422).send('Email already exists.');
    }
    // check for existing username
    User.find({ username }, (error1, result1) => {
      if (error1) {
        res.status(500).json({ error });
      }
      if (result1.length !== 0) { // User already exists
        res.status(422).send('User already exists.');
      } else {
        // Create a new user
        const user = new User();
        user.email = email;
        user.username = username;
        user.password = password;
        // Save the user
        user.save((error2) => {
          if (error2) {
            res.status(500).json({ error });
          } else {
            res.send({ token: tokenForUser(user) });
          }
        });
      }
    });
  });
};
