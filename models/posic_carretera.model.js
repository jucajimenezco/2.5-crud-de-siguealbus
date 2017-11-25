/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const posic_carreteraSchema = new mongoose.Schema({
    posic_gps: {
        type: Number,
        required: true
    }, 
       carreteras:[{type:Schema.ObjectId, ref:'Carreteras'}]
     
});

const posic_carreteraModel = mongoose.model('Posic_carretera', userSchema, 'posic_carretera');

module.exports = posic_carreteraModel;