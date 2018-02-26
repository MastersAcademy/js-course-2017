let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let router = require('./app/routes/router');
// let allLaureates = require('./app/requests/allLaureatesData');
let mongoose = require('mongoose');
const port = 3000;
// mongoose.connect('mongodb://admin:abc123@172.19.0.2:27017/node');
mongoose.connect('mongodb://172.19.0.2:27017/node');


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to mongo');
});

app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use('/items', router);

app.listen(port, function () {
    console.log(`Server is listening on ${port}`);
});

// allLaureates();
