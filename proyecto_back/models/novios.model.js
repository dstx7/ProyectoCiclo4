const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoviosSchema = new Schema({
    id_novio:{type:String , required: true, max:60 },
    nombre:{type:String , required: true, max:60 },
    estatura:{type:Number , required: true, max:300 },
    edad:{type:Number , required: true, max:40 },
    telefono:{type:String , required: true, max:15 },
    mail:{type:String , required: false, max:70 },
    direccion:{type:String , required: false, max:150 }
})

module.exports = mongoose.model("novios", NoviosSchema);