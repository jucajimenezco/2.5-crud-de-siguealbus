/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const tipos_pSchema = new mongoose.Schema({
    idparada: {
        type: Number,
        required: true
    }, 
    nombre: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    alerta: {
        type: String,
        required: true
    },
    servidor:[{type:Schema.ObjectId, ref:'Servidor'}]
});

const camionModel = mongoose.model('Camion', userSchema, 'camion');

module.exports = tipos_pModel;