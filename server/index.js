const path = require('path');
require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorMiddleware = require('./middleware/ErrorMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/', router);
app.use(errorMiddleware.middleware);

app.use("/static", express.static(path.join(__dirname, '/static')));

const startServer = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started (Port ${PORT})`));
    } catch (err) {
        console.log(err);
    }
}

startServer();