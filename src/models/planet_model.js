import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PlanetSchema = new Schema({
  distanceFromSun: Number,
  diameter: Number,
  mass: Number,
  density: Number,
  orbitalEccentricity: Number,
  orbitalInclination: Number,
  spinAxisTilt: Number,
  rotationDays: Number,
  orbitalPeriodAroundSun: Number,
  numberOfMoons: Number,
  significantSatellites: String,
  atmosphereThickness: Number,
  atmosphereComposition: String,
  interiorStructure: String,
  summary: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

// create PlanetModel class from schema
const PlanetModel = mongoose.model('Planet', PlanetSchema);

export default PlanetModel;
