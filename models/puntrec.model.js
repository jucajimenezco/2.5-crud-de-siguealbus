/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const puntrecSchema = new mongoose.Schema({
    
    ubicac: {
        type: string,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    hora: {
        type: TimeRanges,
        required: true
    },
    colonia:[{type:Schema.ObjectId, ref:'Colonias'}]


});

const puntrecModel = mongoose.model('Puntrec', userSchema, 'puntrec');

module.exports = puntrecModel;