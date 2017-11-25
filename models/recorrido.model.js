/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const recorridoSchema = new mongoose.Schema({
    idruta: {
        type: Number,
        required: true
    },
    hora_entrada: {
        type: String,
        required: true
    },
    hora_salida: {
        type: String,
        required: true
    },
    rutas:[{type:Schema.ObjectId, ref:'Rutas'}]
});

const recorridoModel = mongoose.model('Recorrido', userSchema, 'recorrido');

module.exports = recorridoModel;