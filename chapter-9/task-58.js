// iterate over array using Array.forEech method

const cities = ["Bandung", "Jakarta", "Surabaya", "Makasar", "Malang"];

cities.forEach((city) => {
  console.log(city);
});

cities.forEach((city, index) => {
  console.log(`Index (${index}: ${city})`);
});
