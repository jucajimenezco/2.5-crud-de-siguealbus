/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const rutasSchema = new mongoose.Schema({
    idruta: {
        type: Number,
        required: true
    }, 
    
    carreteras:[{type:Schema.ObjectId, ref:'Carretera'}],
    ciudades:[{type:Schema.ObjectId, ref:'Ciudades'}]
});

const rutasModel = mongoose.model('Rutas', userSchema, 'rutas');

module.exports = rutasModel;
