import Planet from '../models/planet_model';

export const createPlanet = (req, res) => {
  const planet = new Planet();
  planet.id = req.body.id;
  planet.planetName = req.body.planetName;
  planet.diameter = req.body.diameter;
  planet.mass = req.body.mass;
  planet.density = req.body.density;
  console.log('INSIDE CONTROLLER');
  planet.save()
    .then((result) => {
      console.log(result);
      res.json({ message: 'planet created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
//  res.send('planet should be created and returned');
};

export const getPlanets = (req, res) => {
  console.log(Planet);
  Planet.find({})
    .then((result) => {
      console.log(result);
      res.json(result);
    });
  // Planet.findById('5f41d8da702e613b6cdcf543')
  //   .then((result) => {
  //     console.log('FINDING BY ID');
  //     console.log(result);
  //   });
};

export const getPlanet = (req, res) => {
  console.log(req.params.id);
  Planet.find({ id: req.params.id })
    .then((result) => {
      console.log(result);
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
