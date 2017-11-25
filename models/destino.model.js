/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const destinoSchema = new mongoose.Schema({
 
    nombre: {
        type: Number,
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
    ciudades:[{type:Schema.ObjectId, ref:'Ciudades'}]
});

const destinoModel = mongoose.model('Destino', userSchema, 'destino');

module.exports = destinoModel;