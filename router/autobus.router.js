const router = require('express').Router();
const handler = require('../utils/handler');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/unidad2', {
  useMongoClient: true
});
//revisando

const Autobus = require('../models/autobus.model');
// regresa una consulta
module.exports = () => {
    router.get('/', (req, res) => {
        Autobus.find({})
        .sort()
        .exec(handler.handleMany.bind(null, 'autobus', res));
    });
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        Autobus.find({_id:id})
        .sort()
        .exec(handler.handleOne.bind(null, 'autobus', res));
    });   
    router.get('/posicion/:posicion', (req, res) => {
        const posiciondb = req.params.name;
        Autobus.find({posicion:posiciondb})
        .sort()
        .exec(handler.handleMany.bind(null, 'autobus', res));
    });
    router.get('/status/:status', (req, res) => {
        const estado = req.params.statusl;
        Autobusr.find({status:estado})
        .sort()
        .exec(handler.handleMany.bind(null, 'autobus', res));
    });
    router.get('/hora_status/:hora_status', (req, res) => {
        const horae = req.params.hora_status;
        Autobus.find({hora_status:horae})
        .sort()
        .exec(handler.handleMany.bind(null, 'autobus', res));
    });




// Insertar
    router.post('/', (req, res) => {
        const autobus = req.body;        
        Autobus.create(autobus)
            .then(
                function(data){
                    console.log(data);
                    res.json(data);
                }
            )
            .catch(
                function(err){
                    console.log(err);
                    res.status(400);
                    res.json({error:err});
                }
            )       
    });

    //Eliminar
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        Autobus.remove({_id:id}, function(err, data){
            if(err){
                console.log(err);
                res.status(400);
                res.json({error:err});
            }else{
                res.json({msj:"Todo estuvo bien, se elimino correctamente"});
            }
        })    

    });  
    //modificar
    router.put('/:id', (req, res) => {
    var id = args._id;
    var updateObj = {updatedDate: Date.now()};
    _.extend(updateObj, args);

    Autobus.findByIdAndUpdate(id, updateObj, function(err, autobus) {
        if (err) {
            logger.error(modelString +':edit' + modelString +' - ' + err.message);
            self.emit('item:failure', 'Failed to edit ' + modelString);
            return;
        }
        self.emit('item:success', model);
    });
});
 
    return router;
}

