const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const checkMiddleware = require('../middleware/authenticationMiddleware');

router.post('/registration', userController.register);
router.post('/login', userController.login);
router.get('/authenticate', checkMiddleware, userController.isAuthorized);
router.post('/get_data', userController.getUserData);
router.post('/get_deals', userController.getDeals);
router.post('/set_data', userController.setUserData);

module.exports = router;