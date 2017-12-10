var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **************  Conexión a la base de datos
mongoose.connect('mongodb://localhost/app');

// **************  Schemas
// Productos
var userSchema = {
	email:{type:String,required:true},
	type: {type:String,required:true},
	password: {type:String,required:true,minlenght:[8,"contraseña muy corta"]}	
};

// **************  Definimos los getters del schema
var user_Schema = new Schema(userSchema);
 
var User = mongoose.model("User",user_Schema)

module.exports.User = User