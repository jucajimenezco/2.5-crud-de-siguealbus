/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const carreterasSchema = new mongoose.Schema({
    nombre: {
        type: string,
        required: true
    }, 
    tipo: {
        type: Number,
        required: true
    },
    
    rutas:[{type:Schema.ObjectId, ref:'Rutas'}]
});

const carreterasModel = mongoose.model('Carreteras', userSchema, 'carreteras');

module.exports = careterasModel;