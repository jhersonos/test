var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **************  Conexión a la base de datos
mongoose.connect('mongodb://localhost/app');

// **************  Schemas
// Productos
var pedidoSchema = {
	consumer: {type:String,required:true},
	price	: {type:Number,required:true},
	details : {type:Array,required:true},
	state	: {type:String,required:true},
	payment : {type:String,required:true},
	observations:{type:String,required:true},
	date	: {type:Date,required:true}
};

// **************  Definimos los getters del schema
var pedido_Schema = new Schema(pedidoSchema);
 
var Pedido = mongoose.model("Pedido",pedido_Schema)

module.exports.Pedido = Pedido