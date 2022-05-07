const Router = require('express');
const router = new Router();
const pictureController = require('../controllers/pictureController');

router.post('/', pictureController.add);
router.get('/', pictureController.get);

module.exports = router;