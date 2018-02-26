let express = require('express');
let router = express.Router();
let data = require('../models/static-data');
let getLaureateData = require('./../requests/laureateData');

let fakeId = 12345677;


router.get('/', function (req, res) {
    let reqObj = Object.assign({}, req.query);
    let result;

    switch (reqObj.sort) {
        case '"lastName"':
            switch (reqObj.dir) {
                case '"asc"':
                    data.sort(function (a, b) {
                        if (a.lastName < b.lastName)
                            return -1;
                        if (a.lastName > b.lastName)
                            return 1;
                        return 0;
                    });
                    break;
                case '"desc"':
                    data.sort(function (a, b) {
                        if (a.lastName > b.lastName)
                            return -1;
                        if (a.lastName < b.lastName)
                            return 1;
                        return 0;
                    });
                    break;
            }
            break;
        case '"bornCountry"':
            switch (reqObj.dir) {
                case '"asc"':
                    data.sort(function (a, b) {
                        if (a.bornCountry < b.bornCountry)
                            return -1;
                        if (a.bornCountry > b.bornCountry)
                            return 1;
                        return 0;
                    });
                    break;
                case '"desc"':
                    data.sort(function (a, b) {
                        if (a.bornCountry > b.bornCountry)
                            return -1;
                        if (a.bornCountry < b.bornCountry)
                            return 1;
                        return 0;
                    });
                    break;
            }
            break;
    }
    result = [];
    result = data.slice(+reqObj.start, +reqObj.count + +reqObj.start);

    res.json(result);
});

router.post('/', function (req, res) {
    let item = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bornCountry: req.body.bornCountry,
        id: ++fakeId
    };

    getLaureateData(item).then(function(result) {
        item.url = result[3][0];
        item.info = result[2][0];
        data.push(item);
        res.status(200).send(item);
    }).catch(function(error) {
        console.log(error);
        res.status(error.code).send(error);
    });
});

router.put('/:id', function (req, res) {

    let item = data.find(function (el) {
        return el.id == req.params.id;
    });

    let index = data.indexOf(item);

    item.firstName = req.body.firstName;
    item.lastName = req.body.lastName;
    item.bornCountry = req.body.bornCountry;
    data[index] = item;
    res.send(item);

});

router.delete('/:id', function (req, res) {

    let item = data.find(function (laureate) {
        return laureate.id == req.params.id;
    });

    data.splice(data.indexOf(item), 1);

    res.send({ status: 'ok' });

});

module.exports = router;
