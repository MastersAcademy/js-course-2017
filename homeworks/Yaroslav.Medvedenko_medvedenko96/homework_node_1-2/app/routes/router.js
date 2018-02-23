const express = require('express');
const router = express.Router();
const data = require('../models/static-data');
const request = require('request');

let fakeId = 12345677;
function isEmptyObj(obj) {
   return !Object.keys(obj).length
}
function sortArr(items, sortParam, dirParam) {
    const arrToSort = items.filter(function(item) {
        return item[sortParam];
    });

    const arrToNotSort = items.filter(function(item) {
        return !item[sortParam];
    });

     function sortedArr(){
        return arrToSort.sort(function (a, b) {
            const nameA = a[sortParam].toLowerCase();
            const nameB = b[sortParam].toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
    }

    if (dirParam === "asc"){
        return sortedArr().concat(arrToNotSort);
    } else if (dirParam === "desc"){
        return sortedArr().reverse().concat(arrToNotSort);
    }
}




router.get('/', function (req, res) {


    const startParam = parseInt(req.query.start);
    const countParam = parseInt(req.query.count);
    let sortParam ,dirParam;
    if (req.query.sort) {sortParam = req.query.sort.replace(/"/g, '');}
    if (req.query.dir) {dirParam = req.query.dir.replace(/"/g, '');}


    let result;

    if (sortParam && dirParam) {
        let sortArray = sortArr(data, sortParam, dirParam);
        result = sortArray.slice(startParam, countParam);
    } else if (isEmptyObj(req.query)){
        result = data;
    } else {
        result = data.slice(startParam, countParam);
    }

    res.json(result);
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

    res.send({status : 'ok'});

});

module.exports = router;
