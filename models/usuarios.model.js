/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: true
    },
    calle: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: true
    },
    cp: {
        type: Number,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    calle1: {
        type: String,
        required: true
    },
    calle2: {
        type: String,
        required: true
    },
    fb: {
        type: String,
        required: true
    },
    tw: {
        type: String,
        required: true
    },
    inst: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    numtel: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pasw: {
        type: String,
        required: true
    },

    detalle_posicion:[{type:Schema.ObjectId, ref:'Detalle_posicion'}],
    reportes:[{type:Schema.ObjectId, ref:'Reportes'}]
});

const usuarioModel = mongoose.model('Usuario', userSchema, 'usuario');

module.exports = usuarioModel;