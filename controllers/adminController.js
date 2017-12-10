module.exports = {
	index:function(req,res,next){
		res.render("app/admin/index")
	},
	orden:function(req,res,next){
		res.render("orden")
	}
}