module.exports = function(req,res,next){
	if (!req.session.user_id) {
		res.redirect("/login")
	}else{
		if (req.session.type=="cajero") {
			res.redirect("/cajero")			
		}else if(req.session.type=="admin"){
			res.redirect("/admin")
		}else{
			next()
		}
		
	}	
}