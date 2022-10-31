var express = require('express');
var router = express.Router();
const currentLocations = require('../db/currentlocations');


/* GET home page. */
router.get('/', async (req, res) => {

  const currentLocs = await currentLocations.getCurrentLocations();

  res.render('index', { title: 'Express', currentLocs : currentLocs });
});

module.exports = router;
