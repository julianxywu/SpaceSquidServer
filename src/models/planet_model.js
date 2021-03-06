import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PlanetSchema = new Schema({
  id: Number,
  planetName: String,
  distanceFromSun: Number,
  diameter: Number,
  mass: String,
  density: Number,
  orbitalEccentricity: Number,
  orbitalInclination: Number,
  spinAxisTilt: Number,
  rotationDays: Number,
  orbitalPeriodAroundSun: Number,
  numberOfMoons: Number,
  significantSatellites: String,
  atmosphereComposition: String,
  interiorStructure: String,
  color: String,
  summary: [String],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

// create PlanetModel class from schema
const PlanetModel = mongoose.model('Planet', PlanetSchema);

export default PlanetModel;
