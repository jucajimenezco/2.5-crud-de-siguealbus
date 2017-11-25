/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');
const autobusSchema = new mongoose.Schema({
    posicion: {
        type: Number,
        required: true
    }, 
    status: {
        type: Number,
        required: true
    },
    hora_status: {
        type: String,
        required: true
    },
    corrida:[{type:mongoose.Schema.ObjectId, ref:'Corrida'}]
    
});

const autobusModel = mongoose.model('Autobus', autobusSchema, 'autobus');

module.exports = autobusModel;
