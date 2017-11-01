/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const detalle_posicionSchema = new mongoose.Schema({
    
   
    posicion:[{type:Schema.ObjectId, ref:'Posicion'}],
    usuario:[{type:Schema.ObjectId, ref:'Usuarios'}]


});

const detalle_posicionModel = mongoose.model('Detalle_posicion', userSchema, 'detalle_posicion');

module.exports = detalle_posicionModel;