var express = require('express');
var router = express.Router();
var controllers = require("../controllers/index")
var adminSession = require("../middlewares/AdminSession")
var cajeroSession = require("../middlewares/CajeroSession")
var chefSession = require("../middlewares/ChefSession")
var Pedido = require("../models/pedido").Pedido

/*Sessions*/
router.use("/admin",adminSession)
router.use("/chef",chefSession)
router.use("/cajero",cajeroSession)
/* GET home page. */
router.get('/',controllers.homeController.index);
router.get('/login',controllers.homeController.login);
router.post('/session',controllers.homeController.session)
/* admin routes */
router.get('/admin',controllers.adminController.index);
router.get('/admin/caja',controllers.adminController.caja);
router.get('/admin/reporte',controllers.adminController.reporte);
/* chef routes */
router.get('/chef',controllers.chefController.index);

router.route("/chef/preparar/:id").get(function(req,res){
	Pedido.findById(req.params.id,function(req,imagen){
		res.render("/chef",{imagen:imagen})
	})	
}).put(function(req,res){
	Pedido.findById(req.params.id,function(err,pedido){
		pedido.title = req.body.title
		pedido.save(function(err){
			if (!err) {
				res.render("/chef",{pedido:pedido})
			}else{
				console.log(err)
				res.send("ocurrio algun problema al procesar el pedido")
			}
		})
	})	
}).delete(function(req,res){
	
})

/* cajero routes */
router.get('/cajero',controllers.cajeroController.index);

module.exports = router;