/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const reg_paradasSchema = new mongoose.Schema({
    consecutivo: {
        type: Number,
        required: true
    }, 
    posicion: {
        type: Number,
        required: true
    },
    hora_ini: {
        type: Number,
        required: true
    },
    hora_avance: {
        type: Number,
        required: true
    },
   
    tipos_p:[{type:Schema.ObjectId, ref:'Tipos_p'}]
});

const reg_paradas = mongoose.model('Reg_paradas', userSchema, 'reg_paradas');

module.exports = reg_paradasModel;