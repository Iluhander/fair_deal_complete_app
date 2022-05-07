const {Picture} = require('../models/models');
const ErrorApi = require('../error/ErrorApi');

class PictureController {
    async add(req, res) {
        try {
            const {img} = req.files;
            const pic = await Picture.create({img});
            return res.json(pic);
        } catch (e) {
            next(ErrorApi.badRequest(e.message));
        }

    }

    async get(req, res) {

    }
}

module.exports = new PictureController();