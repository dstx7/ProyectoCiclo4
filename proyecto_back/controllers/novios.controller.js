//en esta seccion se pueden colocar todas las funciones de comandos sql
const Novio = require("../models/novios.model");
let response  = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let novio = new Novio({
        id_novio: req.body.id_novio,
        nombre: req.body.nombre,
        estatura: req.body.estatura,
        edad: req.body.edad,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })
    
    novio.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el novio."
            res.json(response)
            return;
        }
    
    response.exito = true,
    response.msg = "El novio se guardo correctamente"
    res.json(response)
    })
}

exports.find = function(req,res){
    Novio.find(function(err,novios){
        res.json(novios)
    })
}

exports.findOne = function(req,res){
    Novio.findOne({_id:req.params.id}, function(err,novio){
        res.json(novio)
    })
}

exports.update = function(req,res){
    let novio = {
        id_novio: req.body.id_novio,
        nombre: req.body.nombre,
        estatura: req.body.estatura,
        edad: req.body.edad,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    Novio.findByIdAndUpdate(req.params.id, {$set: novio}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el novio."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El novio se modifico correctamente."
        res.json(response)
    })
}

exports.delete = function(req,res){
    Novio.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el novio."
            res.json(response)
            return;
        }

        response.exito = true
        response.msg = "El novio fue fulminado con exito"
        res.json(response)
    })
}