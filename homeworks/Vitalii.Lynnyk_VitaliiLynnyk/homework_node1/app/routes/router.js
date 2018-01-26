let express = require('express');
let router = express.Router();
let data = require('../models/static-data');

let fakeId = 12345677;


function compare(propName,dir) {
    if(dir === 'asc'){
        return function(a,b) {
                if (a[propName] < b[propName])
                    return -1;
                if (a[propName] > b[propName])
                    return 1;
            return 0;
            };

        }

    if(dir === 'desc'){
        return function(b,a) {
            if (a[propName] < b[propName])
                return -1;
            if (a[propName] > b[propName])
                return 1;
            return 0;
        };

    }
}


router.get('/', function (req, res) {
    let sort = (req.query.sort);
    let dir = (req.query.dir);
        if (sort !== undefined) sort = sort.replace(/"/g, '');
        if (dir !== undefined) dir = dir.replace(/"/g, '');
    let start = parseInt(req.query.start);
    let end = parseInt(start + parseInt(req.query.count));
    let result;

    if ((sort === 'lastName') || (sort === 'bornCountry')) {
        data.sort(compare(sort,dir));
    }

    if(start === 0){
        result = data.slice(start, end);
    }else{
        start++;
        result = data.slice(start, end);
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
