let express = require('express');
let router = express.Router();
let data = require('../models/static-data');

let request = require('request');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

var Schema = mongoose.Schema;

var nobelLaureatesSchema = new Schema({
  firstName:  {type: String, default: '0'},
  lastName:  {type: String, default: '0'},
  bornCountry:  {type: String, default: '0'},
  inf:  {type: String, default: '0'},
  url:  {type: String, default: '0'},
},{ collection: 'nobelLaureates' });

var nobelLaureates = mongoose.model('nobelLaureates',nobelLaureatesSchema);

nobelLaureates.remove({}, function(err) {
    if(err) throw err;
    console.log('collection removed')
});

function parse(firstName,lastName){
    return new Promise(function(resolve, reject){
        request('https://en.wikipedia.org/w/api.php?action=opensearch&search='+firstName+'%20'+lastName+'&namespace=0&format=json&generator=redirects',{json: true}, function (error, response, body) {
            if (error) { reject(error); }
            resolve(body);
        });
    });
}

data.map(row => {
    parse(row.firstName,row.lastName).then(function(val) {
        row.inf = String(val[2]);
        row.url = String(val[3]);
        return row;
    }).then((row)=>{
    new nobelLaureates({firstName:row.firstName,lastName:row.lastName,bornCountry:row.bornCountry,inf:row.inf,url:row.url}).save(function (err) {
        if (err) return handleError(err);
    });
    }).catch(function(err) {
        console.error(err);
    });
});

router.get('/', function (req, res) {
    let sort = (req.query.sort);
    let dir = (req.query.dir);
        if (sort !== undefined) sort = sort.replace(/"/g, '');
        if (dir !== undefined) dir = dir.replace(/"/g, '');
    let start = parseInt(req.query.start);
    let end = parseInt(start + parseInt(req.query.count));
    if(sort === undefined){
        nobelLaureates.find(function (err, posts) {
            res.send(posts.slice(start,end));
        });
    }else{
        nobelLaureates.find().sort([[sort,dir]]).find(function (err, posts) {
            res.send(posts.slice(start,end));
        });
    }
});

router.post('/', function (req, res) {
    let item = new nobelLaureates({firstName:req.body.firstName,lastName:req.body.lastName,bornCountry:req.body.bornCountry}).save(function (err) {
        if (err) return handleError(err);
    });
    res.send(item);
});

router.put('/:id', function (req, res) {
    nobelLaureates.findOne({_id: req.params.id}, function (err, inf) {
        inf.firstName = req.body.firstName,
        inf.lastName = req.body.lastName,
        inf.bornCountry = req.body.bornCountry;
        inf.save(function (err) {
            if(err) {
                console.error('ERROR!');
            }
            res.send(inf);
        });
    });
});

router.delete('/:id', function (req, res) {
    nobelLaureates.remove({_id: req.params.id }, function(err) {
        if (!err) {
            res.json({message:"Deleted successfully"});
        }else {
            res.json({message:err})
        }
    });
});

module.exports = router;
