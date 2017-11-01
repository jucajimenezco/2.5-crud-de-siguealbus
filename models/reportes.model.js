/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
    
    suceso: {
        type: Text,
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

    usuario:[{type:Schema.ObjectId, ref:'Usuarios'}]


});

const reporteModel = mongoose.model('Reporte', userSchema, 'reporte');

module.exports = reporteModel;