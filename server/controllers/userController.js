const ErrorApi = require('../error/ErrorApi');

class UserController {
    async register(req, res) {

    }

    async login(req, res) {

    }

    async isAuthorized(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ErrorApi.badRequest('SUSSY'));
        }

        res.json(id);
    }
}

module.exports = new UserController();