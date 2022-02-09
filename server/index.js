require('dotenv').config()
const express = require('express')
const path = require("path");

const PORT = process.env.PORT || 2228

const app = express()

app.use("/static", express.static(path.join(__dirname, '/../client/build/')));

app.get('/main', function(req, res) {
    res.sendFile(path.join(__dirname,'/../client/build/index.html'))
});

app.get('/manifest.json', function(req, res) {
    res.sendFile(path.join(__dirname,'/../client/build/manifest.json'))
});

app.get('/static/js/main.0f56e352.js', function(req, res) {
    res.sendFile(path.join(__dirname,'/../client/build/static/js/main.0f56e352.js'))
});

app.get('/static/css/main.f13d7f65.css', function(req, res) {
    res.sendFile(path.join(__dirname,'/../client/build/static/css/main.f13d7f65.css'))
});

app.listen(PORT, () => console.log('OK!'))