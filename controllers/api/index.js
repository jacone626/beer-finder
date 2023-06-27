const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./review-routes');
const beerIndexRoutes = require('./beerIndexRoutes')
const pairingRoutes = require('./pairingRoutes')
const activityRoutes = require('./activityRoutes')

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/beerIndex', beerIndexRoutes);
router.use('/pairings', pairingRoutes);
router.use('/activities', activityRoutes);


module.exports = router;
