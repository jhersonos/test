var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **************  Conexión a la base de datos
// mongoose.connect('mongodb://localhost/app');

// **************  Schemas
// Productos
var userSchema = {
	type: {type:String,required:true},
	password: {type:String,required:true,minlenght:[8,"contraseña muy corta"]}	
};

// **************  Definimos los getters del schema
var User = new Schema(userSchema);
 
var User = mongoose.model("User",user_schema)

module.exports.User = User