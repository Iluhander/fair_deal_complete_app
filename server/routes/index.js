const Router = require('express');
const router = new Router();
const dealRouter = require('./dealRouter');
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');
const messageRouter = require('./messageRouter');

router.use('/user', userRouter);
router.use('/deal', dealRouter);
router.use('/chat', chatRouter);
router.use('/message', messageRouter);

module.exports = router;