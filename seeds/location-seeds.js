const { Location } = require("../models");

const locationdata = [
  {
    id: 1,
    name: "Bali",
  },
  {
    id: 2,
    name: "Canada",
  },
  {
    id: 3,
    name: "Egypt",
  },
  {
    id: 4,
    name: "South Africa",
  },
  {
    id: 5,
    name: "Amsterdam",
  },
  {
    id: 6,
    name: "London",
  },
  {
    id: 7,
    name: "Italy",
  },
  {
    id: 8,
    name: "Portugal",
  },
  {
    id: 9,
    name: "Morocco",
  },
  {
    id: 10,
    name: "Sweden",
  },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;
