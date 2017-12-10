var express = require('express');
var router = express.Router();
var controllers = require("../controllers/index")

/* GET home page. */
router.get('/',controllers.homeController.index);
router.get('/login',controllers.homeController.login);
router.post('/session',controllers.homeController.session)
router.get('/admin',controllers.adminController.index);
router.get('/admin/orden',controllers.adminController.orden);
router.get('/chef',controllers.chefController.index);
router.get('/cajero',controllers.cajeroController.index);


module.exports = router;
