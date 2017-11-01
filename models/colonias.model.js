/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const coloniaSchema = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: true
    },
    cp: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    codrec: {
        type: Number,
        required: true
    },
    ruta:[{type:Schema.ObjectId, ref:'Rutas'}]


});

const coloniaModel = mongoose.model('Colonia', userSchema, 'colonia');
module.exports = coloniaModel;