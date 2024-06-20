const router = require('express').Router();
const authRouter = require('./auth.api.router');
// const tokensRouter = require('./tokens.api.router');

// router.use('/tokens', tokensRouter);
router.use('/auth', authRouter);

module.exports = router;