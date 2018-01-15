let express = require('express');
let router = express.Router();
let data = require('../models/static-data');

let fakeId = 12345677;

router.get('/', function (req, res) {

    res.json(data);

});

router.post('/', function (req, res) {

    let item = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        bornCountry : req.body.bornCountry,
        id : ++fakeId
    };

    data.push(item);

    res.send(item);

});

router.put('/:id', function (req, res) {

    let item = newItem;

    item.firstName = req.body.firstName;
    item.lastName = req.body.lastName;
    item.bornCountry = req.body.bornCountry;

    res.send(item);

});

router.delete('/:id', function (req, res) {

    let item = data.find(function (laureate) {
        return laureate.id == req.params.id;
    });

    data.splice(data.indexOf(item), 1);

    res.send({status : 'ok'});

});

module.exports = router;
