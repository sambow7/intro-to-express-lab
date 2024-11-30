const express = require("express")

const app = express()

app.get("/", (req,res) => {
  res.send("Mic check");
});

app.get("/greetings", (req,res) => {
  res.send("Mic check 1...2");
});

app.get("/greetings/:nameId", (req,res) => {
  res.send("What a delight it is to see you once more, Mathilda.");
});

app.get("/roll/:rollId", (req,res) => {
  res.send("You rolled a 14.");
});

app.get("/collectibles/:indexId", (req,res) => {
  res.send("So, you want the shiny ball? For 5.95, it can be yours!");
});

app.listen(3000, () => {
  console.log("listening on Port 3000");
});

