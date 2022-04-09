const { Restaurant } = require("../models");

const Restaurantdata = [
  // Balian restaurant
  {
    id: 1,
    name: "Bai Yun",
    city: "Bali",
    location_id: 1,
  },
  // Canadian restaurant
  {
    id: 2,
    name: "La Planque",
    city: "Quebec City",
    location_id: 2,
  },
  // Eqyptian restaurant
  {
    id: 3,
    name: "Al Khal Egyptian Restaurant",
    city: "Cairo",
    location_id: 3,
  },
  // South African restaurant
  {
    id: 4,
    name: "Lelapa",
    city: "Cape Town",
    location_id: 4,
  },
  // Amsterdam restaurant
  {
    id: 5,
    name: "Mr. Meat",
    city: "Amsterdam",
    location_id: 5,
  },
  // London restaurant
  {
    id: 6,
    name: "The Park Room",
    city: "London",
    location_id: 6,
  },
  // Italian restaurant
  {
    id: 7,
    name: "Alle Darsene di Loppia",
    city: "Bellagio",
    location_id: 7,
  },
  // Portugese restaurant
  {
    id: 8,
    name: "ILHAkAFFE",
    city: "Lisbon",
    location_id: 8,
  },
  // Morrocan restaurant
  {
    id: 9,
    name: "Casa Lalla",
    city: "Marrakech",
    location_id: 9,
  },
  // Swedish restaurant
  {
    id: 10,
    name: "Thornstroms",
    city: "Gothenburg",
    location_id: 10,
  },
];

const seedRestaurants = () => Restaurant.bulkCreate(Restaurantdata);

module.exports = seedRestaurants;
