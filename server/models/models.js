const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
});

const Picture = sequelize.define('picture', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false}
});

const Deal = sequelize.define('deal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_side_id: {type: DataTypes.INTEGER},
    second_side_id: {type: DataTypes.INTEGER},
    header: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    comment: {type: DataTypes.STRING}
});

Deal.hasMany(Picture);
User.hasMany(Deal);

module.exports = {
    User,
    Deal,
    Picture
}