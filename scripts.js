// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)"

names.forEach((personName) => console.log(personName));

provinces.forEach((province) => console.log(province));

names.forEach((nam, provIndex) =>
  console.log(`${nam} (${provinces[provIndex]})`)
);

//Use `map` to create a new array of province names in all uppercase. Log the new array to the console.

provinces.map((province) => console.log(province.toUpperCase()));

// Create a new array using `map` that contains the length of each name.

const nameLength = names.map((nam) => nam.length);

console.log(nameLength);

// Use `sort` to alphabetically sort the provinces.

const provinceInOrder = provinces.sort((a, b) => (a > b ? 1 : -1));

console.log(provinceInOrder);

// Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'

const nameContainS = names.map((nam) =>
  nam.split("").some((letter) => letter === "S" || letter === "s")
);

console.log(nameContainS);

// Use `reduce` to transform the names array into an object mapping names to their respective provinces.

const nameProvince = names.reduce((acc, nam, index) => {
  acc[nam] = provinces[index];
  return acc;
}, {});
console.log(nameProvince);
