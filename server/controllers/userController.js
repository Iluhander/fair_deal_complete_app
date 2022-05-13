const ErrorApi = require('../error/ErrorApi');
const bcrypt = require('bcrypt');
const {User, Deal} = require('../models/models');
const jwt = require('jsonwebtoken');
const {where, Op} = require("sequelize");

const generateJWT = (id, email, login, phone) => {
    return jwt.sign({
        id,
        login,
        email,
        phone,
    }, process.env.SECRET_KEY, {
        expiresIn: "24h"
    });
}

class UserController {
    async register(req, res, next) {
        const {login, email, phone, password} = req.body;

        if (!login || (login.length > 12) || (!password) || (password.length > 14)) {
            return next(ErrorApi.conflict("Некорректные логин и пароль"));
        }

        const candidateLogin = await User.findOne({where: {login}})
        if (candidateLogin) {
            return next(ErrorApi.conflict("Пользователь с данным логином" +
                " уже зарегистрирован !"));
        }

        if (email !== "") {
            const candidateMail = await User.findOne({where: {email}});
            if (candidateMail) {
                return next(ErrorApi.conflict("Пользователь с данной почтой уже зарегистрирован !"));
            }
        } else if (phone !== "") {
            const candidatePhone = await User.findOne({where: {phone}});
            if (candidatePhone) {
                return next(ErrorApi.conflict("Пользователь с данным номером" +
                    " телефона уже зарегистрирован !"));
            }
        } else {
            return next(ErrorApi.conflict("Укажите либо почту, либо номер телефона !"));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({
            login,
            first_name: " ",
            second_name: " ",
            patronymic: " ",
            email,
            phone,
            location: " ",
            photo: 0,
            password: hashPassword
        });

        const token = generateJWT(user.id, login, email, phone);

        return res.json({token});
    }

    async login(req, res, next) {
        const candidate = await User.findOne({where: {login: req.body.login}});
        if (!candidate) {
            return next(ErrorApi.conflict("Пользователь с таким логином не найден"));
        }

        const passwordCorrect = bcrypt.compareSync(req.body.password, candidate.password);
        if (!passwordCorrect) {
            return next(ErrorApi.conflict("Неверный пароль"));
        }

        const token = generateJWT(candidate.id, candidate.login, candidate.email, candidate.phone);
        return res.json({token});
    }

    async isAuthorized(req, res, next) {
        const token = generateJWT(req.user.id, req.user.login,
            req.user.email, req.user.phone);

        const candidate = await User.findOne({where: {id: req.user.id}});

        return res.json({
            token: token,
            first_name: candidate.first_name,
            second_name: candidate.second_name,
            patronymic: candidate.patronymic,
            location: candidate.location
        });
    }

    async getUserData(req, res, next) {
        let result = await User.findOne({where: {login: req.body.login}});

        return res.json(result);
    }

    async setUserData(req, res, next) {
        const currentUser = await User.findOne({where: {login: req.body.login}});

        if (req.body.email !== "") {
            const candidateMail = await User.findOne({where: {email: req.body.email}});

            if (candidateMail) {
                if (candidateMail.id !== currentUser.id) {
                    return next(ErrorApi.conflict("Пользователь с данной почтой уже зарегистрирован !"));
                }
            }
        } else if (req.body.phone !== "") {
            const candidatePhone = await User.findOne({where: {phone: req.body.phone}});
            if (candidatePhone) {
                if (candidatePhone.id !== currentUser.id) {
                    return next(ErrorApi.conflict("Пользователь с данным номером" +
                        " телефона уже зарегистрирован !"));
                }
            }
        }

        await User.update(req.body, {where: {login: req.body.login}});

        return res.json(generateJWT(req.body.id, req.body.login,
            req.body.email, req.body.phone));
    }

    async getDeals(req, res) {
        const currentUser = await User.findOne({where: {login: req.body.login}});

        let userDeals = await Deal.findAll({where: {
                [Op.or]: [{
                    first_side_id: currentUser.id
                }, {
                    second_side_id: currentUser.id
                }]
            }
        });

        return res.json(userDeals);
    }
}

module.exports = new UserController();