require('dotenv').config();
const express = require('express');
const path = require("path");

const PORT = process.env.PORT || 2228

const app = express()

app.use("/static", express.static(path.join(__dirname, '/../client/build/')));

app.listen(PORT, () => console.log('OK!'))