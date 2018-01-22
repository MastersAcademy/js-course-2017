let express = require('express');
let router = express.Router();
let data = require('../models/static-data');

let fakeId = 12345677;

router.get('/', function (req, res) {

    let output;
    let sort = (req.query.sort);
    if (sort !== undefined) sort = sort.replace(/"/g, '');
    let dir = (req.query.dir);
    if (dir !== undefined) dir = dir.replace(/"/g, '');
    let start = parseInt(req.query.start);
    let end = parseInt(start + parseInt(req.query.count));

    if (dir === 'asc') {
        if (sort === 'lastName' || 'bornCountry') {
            data.sort(function (a, b) {
                let collator = new Intl.Collator();
                return collator.compare(a[sort], b[sort]);
            });
        }
    }

    if (dir === 'desc') {
        if (sort === 'lastName' || 'bornCountry') {
            data.sort(function (b, a) {
                let collator = new Intl.Collator();
                return collator.compare(a[sort], b[sort]);
            });
        }
    }

    output = data.slice(start, end);
    res.json(output);

});

router.post('/', function (req, res) {

    let item = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        bornCountry: req.body.bornCountry,
        id: ++fakeId
    };

    data.push(item);

    res.send(item);

});

router.put('/:id', function (req, res) {

    let item = data.find(function (el) {
        return el.id === req.params.id;
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
        return laureate.id === req.params.id;
    });

    data.splice(data.indexOf(item), 1);

    res.send({ status: 'ok' });

});

module.exports = router;
