const express = require("express");
const app = express();

//------------
//   DATA
//------------
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


//------------
//  ROUTES         I.N.D.U.C.E
//------------

// INDEX
app.get("/", (req, res) => {
  res.send("Mic check");
});

// SHOW
app.get("/greetings/:greetingsName", (req, res) => {
  res.send(`What a delight it is to see you once more, ${req.params.greetingsName}`);
});

app.get("/roll/:rollNumber", (req, res) => {
  const rollNumber = parseInt(req.params.rollNumber);

  if (isNaN(rollNumber)) {
    res.send("You must specify a number.");
  } else {
    const randomRoll = Math.floor(Math.random() * rollNumber);
    res.send(`You rolled a ${randomRoll}`);
  }
});

// EDIT
app.get("/collectibles/:collectibleIndex", (req, res) => {
  const index = parseInt(req.params.collectibleIndex);

  if (index >= 0 && index < collectibles.length) {
    const collectible = collectibles[index];
    res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
  } else {
    res.send("This item is not yet in stock. Check back soon!");
  }
});

app.get('/shoes', (req, res) => {
  res.send(`Only, ${req.query.price} for your ${req.query.name}!`);
});

// Filter shoes
app.get("/shoes", (req, res) => {
  let filteredShoes = shoes;

  // Filter by min-price
  if (req.query['min-price']) {
    const minPrice = parseFloat(req.query['min-price']);
    if (!isNaN(minPrice)) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }
  }
});

//------------
//  LISTENER
//------------
app.listen(3000, () => {
  console.log("listening on Port 3000");
});
