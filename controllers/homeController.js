module.exports = {
	index:function(req,res,next){
		res.render("index",{message:req.flash("loginMessage")})
	},
	login:function(req,res,next){
		res.render("login",{message:req.flash("signupMessage")})
	},
	session:function(req,res,next){
		User.findOne({email:req.body.email,password:req.body.password},function(err,user){
	 	req.session.user_id = user._id 	
		 	res.redirect("/app")
		})
	}
}