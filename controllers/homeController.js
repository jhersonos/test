var User = require("../models/user").User;

module.exports = {
	index:function(req,res,next){
		res.render("index",{message:req.flash("loginMessage")})
	},
	login:function(req,res,next){
		res.render("login",{message:req.flash("signupMessage")})
	},
	session:function(req,res,next){
		User.findOne({correo:req.body.email,password:req.body.password},function(err,user){	 		
		 	if (err) {
	 			console.log(err)
	 		}	 				 	
		 	req.session.user_id = user._id
		 	req.session.type = user.type
	 		if (user.type=="cajero") {
	 			res.redirect("/cajero")
	 		}else if(user.type == "admin"){
	 			res.redirect("/admin")
	 		}else{
	 			res.redirect("/chef")
	 		}	 		
		})
	}
}