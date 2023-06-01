//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const marca = req.body.marca;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    conexion.query('INSERT INTO productos SET ?',{nombre:nombre, marca:marca, precio:precio, cantidad:cantidad}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const marca = req.body.marca;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    conexion.query('UPDATE productos SET ? WHERE id = ?',[{nombre:nombre, marca:marca, precio:precio, cantidad:cantidad}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};