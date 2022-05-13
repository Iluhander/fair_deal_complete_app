const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    second_name: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING, unique: true},
    location: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
});

const Deal = sequelize.define('deal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_side_id: {type: DataTypes.INTEGER},
    second_side_id: {type: DataTypes.INTEGER},
    header: {type: DataTypes.STRING},
    comment: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    pictures_ids: {type: DataTypes.ARRAY(DataTypes.STRING)}
});

const Chat = sequelize.define('chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_side_id: {type: DataTypes.INTEGER},
    second_side_id: {type: DataTypes.INTEGER}
});

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    from_id: {type: DataTypes.INTEGER},
    text: {type: DataTypes.STRING}
});

Chat.hasMany(Message);
User.hasMany(Deal);
User.hasMany(Chat);

module.exports = {
    User,
    Deal,
    Chat,
    Message
}