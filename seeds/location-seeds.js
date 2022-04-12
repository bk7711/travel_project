const { Location } = require("../models");

const locationdata = [
  {
    id: 1,
    picture: "../public/images/bali-aron-visuals-ycyLUcEoalE-unsplash.jpg",
    city: "Bali",
    country: "Indonesia",
  },
  {
    id: 2,
    picture:
      "../public/images/quebec-matthieu-joannon-DrC-S2-Umes-unsplash.jpg",
    city: "Quebec City",
    country: "Canada",
  },
  {
    id: 3,
    picture: "../public/images/cairo-tom-podmore-zRacUCRY_Sw-unsplash.jpg",
    city: "Cairo",
    country: "Egypt",
  },
  {
    id: 4,
    picture:
      "../public/images/capetown-kylefromthenorth-UrhglJ-2Q8M-unsplash.jpg",
    city: "Cape Town",
    country: "South Africa",
  },
  {
    id: 5,
    picture: "../public/images/amsterdam-rifad-lafir-jl8BeaBXp9c-unsplash.jpg",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    id: 6,
    picture: "../public/images/london-alex-azabache-W1Y4Y_DBGKw-unsplash.jpg",
    city: "London",
    country: "England",
  },
  {
    id: 7,
    picture:
      "../public/images/bellagio-anastasiya-dalenka-2TuNQcTtcIM-unsplash.jpg",
    city: "Bellagio",
    country: "Italy",
  },
  {
    id: 8,
    picture: "../public/images/lisbon-ronan-furuta-gZfGWcfzaTQ-unsplash.jpg",
    city: "Lisbon",
    country: "Portugal",
  },
  {
    id: 9,
    picture: "../public/images/morocco-zakariae-daoui-Dql2_LN5sRg-unsplash.jpg",
    city: "Marrakech",
    country: "Morocco",
  },
  {
    id: 10,
    picture:
      "../public/images/gothenburg-philip-myrtorp-r3Q66_JQNA4-unsplash.jpg",
    city: "Gothenburg",
    country: "Sweden",
  },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;
