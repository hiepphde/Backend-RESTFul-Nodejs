const express = require("express");
const router = express.Router();
const controller = require('../controllers/homeController');


router.get('/sample', controller.getHomepage);
router.get('/getdata', controller.getDataFromMysql);
router.get('/testLogs', controller.testLog);

module.exports = router;