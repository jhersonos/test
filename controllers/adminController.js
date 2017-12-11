module.exports = {
	index:function(req,res,next){
		res.render("app/admin/index")
	},
	caja:function(req,res,next){
		res.render("app/admin/caja")
	},
	reporte:function(req,res,next){
		res.render("app/admin/reporte")
	}
}