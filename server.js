const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;
const userData = require("./mockData.json");

app.get("/getallusers",(req,res) => {
    res.send(userData)
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})