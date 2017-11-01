/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const servidorSchema = new mongoose.Schema({
   
    ubgps: {
        type: Number,
        required: true
    },
    numalerta: {
        type: String,
        required: true
    },
});

const servidorModel = mongoose.model('Servidor', userSchema, 'servidor');

module.exports = servidorModel;