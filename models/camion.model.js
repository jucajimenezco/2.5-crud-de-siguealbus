/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const camionSchema = new mongoose.Schema({
    numcam: {
        type: Number,
        required: true
    }, 
    numruta: {
        type: Number,
        required: true
    },
    ubgps: {
        type: String,
        required: true
    },
    servidor:[{type:Schema.ObjectId, ref:'Servidor'}]
});

const camionModel = mongoose.model('Camion', userSchema, 'camion');

module.exports = servidorModel;