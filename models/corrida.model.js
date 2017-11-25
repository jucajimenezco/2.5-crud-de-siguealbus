/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const corridaSchema = new mongoose.Schema({
    
    
    autobus:[{type:Schema.ObjectId, ref:'Autobus'}],
    destino:[{type:Schema.ObjectId, ref:'Destino'}]
});

const corridaModel = mongoose.model('Corrida', userSchema, 'corrida');

module.exports = corridaModel;
