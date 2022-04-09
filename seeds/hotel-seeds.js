const { Hotel } = require("../models");

const hoteldata = [
  // Balian resort
  {
    id: 1,
    name: "Natya Resort Ubud",
    city: "Bali",
    location_id: 1,
  },
  // Canadian resort
  {
    id: 2,
    name: "Fairmont Le Chateau Frontenac",
    city: "Quebec City",
    location_id: 2,
  },
  // Eqyptian resort
  {
    id: 3,
    name: "Kempinski Nile Hotel",
    city: "Cairo",
    location_id: 3,
  },
  // South African resort
  {
    id: 4,
    name: "Cape Heritage Hotel",
    city: "Cape Town",
    location_id: 4,
  },
  // Amsterdam resort
  {
    id: 5,
    name: "Movenpick Hotel",
    city: "Amsterdam",
    location_id: 5,
  },
  // London resort
  {
    id: 6,
    name: "The Resident Covent Garden",
    city: "London",
    location_id: 6,
  },
  // Italian resort
  {
    id: 7,
    name: "Hotel Du Lac",
    city: "Bellagio",
    location_id: 7,
  },
  // Portugese resort
  {
    id: 8,
    name: "Hotel Avenida Palace",
    city: "Lisbon",
    location_id: 8,
  },
  // Morrocan resort
  {
    id: 9,
    name: "Riad Melhoun & Spa",
    city: "Marrakech",
    location_id: 9,
  },
  // Swedish resort
  {
    id: 10,
    name: "Radisson Blu Scandinavia Hotel",
    city: "Gothenburg",
    location_id: 10,
  },
];

const seedHotels = () => Hotel.bulkCreate(hoteldata);

module.exports = seedHotels;
