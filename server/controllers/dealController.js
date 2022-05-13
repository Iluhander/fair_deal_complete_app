const ErrorApi = require("../error/ErrorApi");
const {Deal, User} = require("../models/models");

class DealController {
    async create(req, res, next) {
        const {goodName, firstSideLogin, secondSideLogin, dealDescription, picturesIds} = req.body;

        if (!goodName) {
            return next(ErrorApi.conflict("Введите название товара"));
        }

        if (!firstSideLogin || !secondSideLogin) {
            return next(ErrorApi.conflict("Введите логины обеих сторон"));
        }

        const secondSide = await User.findOne({where: {login: secondSideLogin}});
        if (!secondSide) {
            return next(ErrorApi.conflict(`Пользователь ${secondSideLogin} не найден`));
        }

        const firstSide = await User.findOne({where: {login: firstSideLogin}});

        const newDeal = await Deal.create({
            first_side_id: firstSide.id,
            second_side_id: secondSide.id,
            header: goodName,
            comment: dealDescription,
            status: "В рассмотрении модерации",
            pictures_ids: picturesIds
        });

        return res.json(newDeal);
    }

    async get(req, res, next) {
        const exactDeal = await Deal.findOne({where: {id: req.body.id}});
        const firstSide = await User.findOne({where: {id: exactDeal.first_side_id}});
        const secondSide = await User.findOne({where: {id: exactDeal.second_side_id}});

        return res.json({
            ...exactDeal,
            firstSideLogin: firstSide.login,
            secondSideLogin: secondSide.login
        });
    }

    async update(req, res) {

    }
}

module.exports = new DealController();