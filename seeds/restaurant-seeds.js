const { Restaurant } = require("../models");

const Restaurantdata = [
  // Balian restaurant
  {
    id: 1,
    name: "Bai Yun",
    city: "Bali",
  },
  // Canadian restaurant
  {
    id: 2,
    name: "La Planque",
    city: "Quebec City",
  },
  // Eqyptian restaurant
  {
    id: 3,
    name: "Al Khal Egyptian Restaurant",
    city: "Cairo",
  },
  // South African restaurant
  {
    id: 4,
    name: "Lelapa",
    city: "Cape Town",
  },
  // Amsterdam restaurant
  {
    id: 5,
    name: "Mr. Meat",
    city: "Amsterdam",
  },
  // London restaurant
  {
    id: 6,
    name: "The Park Room",
    city: "London",
  },
  // Italian restaurant
  {
    id: 7,
    name: "Alle Darsene di Loppia",
    city: "Bellagio",
  },
  // Portugese restaurant
  {
    id: 8,
    name: "ILHAkAFFE",
    city: "Lisbon",
  },
  // Morrocan restaurant
  {
    id: 9,
    name: "Casa Lalla",
    city: "Marrakech",
  },
  // Swedish restaurant
  {
    id: 10,
    name: "Thornstroms",
    city: "Gothenburg",
  },
];

const seedRestaurants = () => Restaurant.bulkCreate(Restaurantdata);

module.exports = seedRestaurants;
