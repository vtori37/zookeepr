const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);

module.exports = router;

const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(zookeeperRoutes);

module.exports = router;