const Router = require('express');
const router = new Router();
const dealController = require('../controllers/dealController');

router.post('/create', dealController.create);
router.post('/update', dealController.update);
router.post('/get', dealController.get);

module.exports = router;