/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const posicionSchema = new mongoose.Schema({
    
    numalerta: {
        type: Number,
        required: true
    },
    codusuario: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: TimeRanges,
        required: true
    },
    codpuntrec: {
        type: Number,
        required: true
    },
    ubgps: {
        type: String,
        required: true
    },
    servidor:[{type:Schema.ObjectId, ref:'Servidor'}]


});

const posicionModel = mongoose.model('Posicion', userSchema, 'posicion');

module.exports = posicionModel;