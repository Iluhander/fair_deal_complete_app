const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            throw (new Error("Пользователь не авторизовн"));
        } else {
            const tokenData = jwt.verify(token, process.env.SECRET_KEY);

            req.user = tokenData;

            next();
        }
    } catch (err) {
        res.status(401).json({message: err.message});
    }
}