const express = require("express")
const app = express()

app.get("/", (req,res) => {
  res.send("Mic check");
});

app.get("/greetings", (req,res) => {
  res.send("Mic check 1...2");
});

app.get("/greetings/:greetingsName", (req,res) => {
  console.log(req.params.greetingsName);

  res.send(`What a delight it is to see you once more, ${req.params.greetingsName}`);

});

app.get("/roll/:rollNumber", (req,res) => {
  console.log(req.params.rollNumber);

  res.send(`You rolled a ${req.params.rollNumber}`);
  
});

app.get("/collectibles/:collectibleIndex", (req,res) => {
  console.log(req.params.collectibleIndex);

  res.send("So, you want the shiny ball? For 5.95, it can be yours!");

});

app.listen(3000, () => {
  console.log("listening on Port 3000");
});

