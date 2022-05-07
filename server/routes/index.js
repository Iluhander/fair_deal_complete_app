const Router = require('express');
const router = new Router();
const dealRouter = require('./dealRouter');
const userRouter = require('./userRouter');
const pictureRouter = require('./pictureRouter');

router.use('/user', userRouter);
router.use('/deal', dealRouter);
router.use('/picture', pictureRouter);

module.exports = router;