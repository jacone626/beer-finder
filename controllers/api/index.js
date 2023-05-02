const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./review-routes');
const cannabisIndexRoutes = require('./cannabisIndexRoutes')

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/cannabisIndex', cannabisIndexRoutes);

module.exports = router;
