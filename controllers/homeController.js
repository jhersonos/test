var User = require("../models/user").User;

module.exports = {
	index:function(req,res,next){
		res.render("index")
	},
	login:function(req,res,next){		
		res.render("login")
	},
	session:function(req,res,next){
		User.findOne({email:req.body.email,password:req.body.password},function(err,user){
		 	if (err) {
	 			console.log(err)
	 		}else{ 				 	
	 			if (user && user!="") {	 			
	 				var email = user.email.split("@")
	 				if (email[1] == "tektontest.com") {
	 					req.session.user_id = user._id
				 		req.session.type = user.type
	 				}else{
	 					// res.render("login",{message:"el correo no pertenece a tektontest"})
	 					res.redirect("/login")
	 				}	 				
			 		if (user.type=="cajero") {
			 			res.redirect("/cajero")
			 		}else if(user.type == "admin"){
			 			res.redirect("/admin")
			 		}else{
			 			res.redirect("/chef")
			 		}
	 			}else{
	 				// res.render("login",{message:"usuario no registrado"})
	 				res.redirect("/login")
	 			}
		 	}
		})
	}
}