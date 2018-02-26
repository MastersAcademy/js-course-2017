let express = require('express');
let router = express.Router();
let data = require('../models/static-data');

let request = require('request');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite', null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    // SQLite only
    storage: './test.sqlite'
});
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });

let User = sequelize.define('data', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    bornCountry: Sequelize.STRING,
    inf:Sequelize.STRING,
    url:Sequelize.STRING
});
    function parse(firstName,lastName){
        return new Promise(function(resolve, reject){
            request('https://en.wikipedia.org/w/api.php?action=opensearch&search='+firstName+'%20'+lastName+'&namespace=0&format=json&prop=redirects',{json: true}, function (error, response, body) {
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
        User.sync(/*{force:true}*/).then(() => {
            return User.upsert({id: parseInt(row.id),firstName:row.firstName,lastName:row.lastName,bornCountry:row.bornCountry,inf:row.inf,url:row.url});
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

    User.findAll({
        order:[[sort, dir]],
        limit:end,
        raw : true
    }).then(function (sensors) {
        res.json(sensors.slice(start,end));
    });
});

router.post('/', function (req, res) {
    let item = User.create({firstName:req.body.firstName,lastName:req.body.lastName,bornCountry:req.body.bornCountry,raw:true});
    res.send(item);
});

router.put('/:id', function (req, res) {
    let item = User.update({id: parseInt(req.params.id),firstName:req.body.firstName,lastName:req.body.lastName,bornCountry:req.body.bornCountry,raw:true});
    res.send(item);
});

router.delete('/:id', function (req, res) {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (deletedRecord) {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    }).catch(function (error){
            res.status(500).json(error);
        });
});

module.exports = router;
