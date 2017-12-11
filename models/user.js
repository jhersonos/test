var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **************  Conexión a la base de datos
mongoose.connect('mongodb://localhost/app');

var caracter = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"coloque un correo valido"]
var email_v = {
	validator:function(email){
		var arr = email.split("@");
		return arr[1] == "tektontest.com"
	},
	message:"Este correo no pertenece a tekton"
}

// **************  Schemas
// Productos
var userSchema = {
	email	:{type:String,required:"el correo es obligatorio",match:caracter,validate:email_v},
	type: {type:String,required:true},
	password: {type:String,required:true,minlenght:[8,"contraseña muy corta"]}	
};

// **************  Definimos los getters del schema
var user_Schema = new Schema(userSchema);
 
var User = mongoose.model("User",user_Schema)

module.exports.User = User