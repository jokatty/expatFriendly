const express = require("express");
const cors = require("cors");

// create an instance of express
const app = express();

// enable cors
app.use(cors());

// parse incoming string or array data
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/",(req,res)=>{
  res.send("app is working!")
})

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}!`); });