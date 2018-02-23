let express = require('express');
let router = express.Router();
let data = require('../models/static-data');

let fakeId = 12345677;

router.get('/', function (req, res) {
    let dataEdited;
    let sort = (req.query.sort);
    let dir = (req.query.dir);
    let start = parseInt(req.query.start);
    let count = parseInt(req.query.count);
    count += start;   
     
    if (sort !== undefined) sort = sort.replace(/"/g, ''); 
    if (dir !== undefined) dir = dir.replace(/"/g, '');
   

    if(dir === 'asc' && sort === 'lastName' ) {
        data.sort(function (a, b) {
            if (a.lastName > b.lastName) {
              return 1;
            }
            if (a.lastName < b.lastName) {
              return -1;
            }
            return 0;
          });
    }


    if(dir === 'desc' && sort === 'bornCountry' ) {
        data.sort(function (b, a) {
            if (a.bornCountry > b.bornCountry) {
              return 1;
            }
            if (a.bornCountry < b.bornCountry) {
              return -1;
            }
            return 0;
          });
    }
   

    if(dir === 'desc' && sort === 'lastName' ) {
        data.sort(function (b, a) {
            if (a.lastName > b.lastName) {
              return 1;
            }
            if (a.lastName < b.lastName) {
              return -1;
            }
            return 0;
          });
    }


    if(dir === 'asc' && sort === 'bornCountry' ) {
        data.sort(function (a, b) {
            if (a.bornCountry > b.bornCountry) {
              return 1;
            }
            if (a.bornCountry < b.bornCountry) {
              return -1;
            }
            return 0;
          });
    }


    dataEdited = data.slice(start, count);
    res.json(dataEdited);
    

});

const request = require('request');

let wiki = data.forEach(function(item){
let name =  item.firstName + ' '+ item.lastName;   
request('https://en.wikipedia.org/w/api.php?action=opensearch&generator=redirects&format=json&search=' + name,
{json: true}, (err, res, body) => {
    if (err ||  res.statusCode !== 200){
        return console.log(err);
    }
    item.info = body[2];
    item.url = body[3];
    console.log(data);
}
);      
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
