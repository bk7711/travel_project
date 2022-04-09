const { Location } = require("../models");

const locationdata = [
  {
    id: 1,
    city: "Bali",
    country: "Indonesia",
  },
  {
    id: 2,
    city: "Quebec City",
    country: "Canada",
  },
  {
    id: 3,
    city: "Cairo",
    country: "Egypt",
  },
  {
    id: 4,
    city: "Cape Town",
    country: "South Africa",
  },
  {
    id: 5,
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    id: 6,
    city: "London",
    country: "England",
  },
  {
    id: 7,
    city: "Bellagio",
    country: "Italy",
  },
  {
    id: 8,
    city: "Lisbon",
    country: "Portugal",
  },
  {
    id: 9,
    city: "Marrakech",
    country: "Morocco",
  },
  {
    id: 10,
    city: "Gothenburg",
    country: "Sweden",
  },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;
