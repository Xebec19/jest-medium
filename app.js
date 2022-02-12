const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/reverse", (req, res) => {
  try{
  const { message } = req.body;
  if (!!message && typeof message === "string") {
    const reverse = message.split("").reverse().join("");
    res.status(201).json({ message: reverse }).end();
  } else {
    throw new Error('Something broke!');
  }
} catch(error){
  res.status(401).json({ message: "Snap!" }).end();
}
});

module.exports = app;
