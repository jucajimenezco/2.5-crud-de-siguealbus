
const mongoose = require('mongoose');

const rutaSchema = new mongoose.Schema({
    
    codcolonia: {
        type: Number,
        required: true
    },
    camion:[{type:Schema.ObjectId, ref:'Camiones'}]
});

const rutaModel = mongoose.model('Ruta', userSchema, 'ruta');

module.exports = rutaModel;