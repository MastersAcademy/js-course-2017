let express = require('express');
let mongoose = require('mongoose');
let addItemDB = require('./../dataBase/setDataDB');
let router = express.Router();

let getLaureateData = require('./../requests/laureateData');
let Laureate = require('./../models/laureate');




router.get('/', function (req, res) {
    let reqObj = Object.assign({}, req.query);
    Laureate.find().skip(+reqObj.start).limit(+reqObj.count).exec((err, result) => {
        switch (reqObj.sort) {
            case '"lastName"':
                switch (reqObj.dir) {
                    case '"asc"':
                        result.sort(function (a, b) {
                            if (a.lastName < b.lastName)
                                return -1;
                            if (a.lastName > b.lastName)
                                return 1;
                            return 0;
                        });
                        break;
                    case '"desc"':
                        result.sort(function (a, b) {
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
                        result.sort(function (a, b) {
                            if (a.bornCountry < b.bornCountry)
                                return -1;
                            if (a.bornCountry > b.bornCountry)
                                return 1;
                            return 0;
                        });
                        break;
                    case '"desc"':
                        result.sort(function (a, b) {
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
        res.json(result);
    });


});

router.post('/', function (req, res) {
    let item = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bornCountry: req.body.bornCountry
    };

    getLaureateData(item).then(function(result) {
        addItemDB(item.firstName, item.lastName, item.bornCountry, result[2][0],result[3][0]).save()
            .then(result => {
                res.status(201).send(result);
            }).catch(error => {
                console.log(error);
                res.status(500).send({
                    err: error
                });
            })

    }).catch(function(error) {
        console.log(error);
        res.status(error.code).send(error);
    });
});

router.put('/:id', function (req, res) {
    Laureate.where({ _id: req.params.id }).update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bornCountry: req.body.bornCountry
    })
        .exec()
        .then(() => {
            Laureate.findOne({_id: req.params.id})
                .exec()
                .then(result => {
                    res.status(200).send(result);
                })
                .catch(error => {
                    console.log(error);
                    res.status(501).send({
                        err: error
                    });
                })

        })
        .catch(error => {
            console.log(error);
            res.status(501).send({
                err: error
            });
        });
});

router.delete('/:id', function (req, res) {
    let id = req.params.id;
    Laureate.remove({ _id: id})
        .exec()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                err: error
            });
        });
});

module.exports = router;
