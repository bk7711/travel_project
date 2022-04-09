const { Hotel } = require("../models");

const hoteldata = [
  // Balian resort  
  {
    id: 1,
    name: "Natya Resort Ubud",
    city: "Bali"
  },
  // Canadian resort
  {
    id: 2,
    name: "Fairmont Le Chateau Frontenac",
    city: "Quebec City"
  },
  // Eqyptian resort
  {
    id: 3,
    name: "Kempinski Nile Hotel",
    city: "Cairo"
  },
  // South African resort
  {
    id: 4,
    name: "Crocodile Bridge Safari Lodge",
    city: "Komatipoort"
  },
  // Amsterdam resort
  {
    id: 5,
    name: "Movenpick Hotel",
    city: "Amsterdam"
  },
  // London resort
  {
    id: 6,
    name: "The Resident Covent Garden",
    city: "London"
  },
  // Italian resort
  {
    id: 7,
    name: "Hotel Du Lac",
    city: "Bellagio"
  },
  // Portugese resort
  {
    id: 8,
    name: "Quinta Jardins do Lago",
    city: "Funchal"
  },
  // Morrocan resort
  {
    id: 9,
    name: "Riad Melhoun & Spa",
    city: "Marrakech"
  },
  // Swedish resort
  {
    id: 10,
    name: "Radisson Blu Scandinavia Hotel",
    city: "Gothenburg"
  },
];

const seedHotels = () => Hotel.bulkCreate(hoteldata);

module.exports = seedHotels;