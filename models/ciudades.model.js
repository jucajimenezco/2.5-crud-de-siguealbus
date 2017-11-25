/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const ciudadesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }, 
    estado: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    lat_grados: {
        type: Number,
        required: true
    },
    lat_min: {
        type: Number,
        required: true
    },
    lat_segundos: {
        type: Number,
        required: true
    },
    lat_orientac: {
        type: Number,
        required: true
    },
    long_grad: {
        type: Number,
        required: true
    },
    long_min: {
        type: Number,
        required: true
    },
    long_seg: {
        type: Number,
        required: true
    },
    long_orientac: {
        type: String,
        required: true
    },
    
});

const ciudadesModel = mongoose.model('Camion', userSchema, 'camion');

module.exports = ciudadesModel;