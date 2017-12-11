module.exports = {
	index:function(req,res,next){
		res.render("app/cajero/index")
	},
	create:function(req,res,next){
		var user = new User({
			consumer:req.body.user,
			price:req.body.price,
			detail:req.body.detail,
			state:req.body.state,
			payment:req.body.payment,
			observations:req.body.observation})
		user.save().then(function (us) {
			res.send("Guardamos exitocamente")
		},function (err){
			console.log(String(err));
			res.send("no se pudo guardar tu wea")
		})
	}
}