let mongoose = require('mongoose');
let data = require('./../requests/allLaureatesData');

mongoose.connect('mongodb://172.19.0.2:27017/node');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to mongo');  
});


data();

