const addWikiApi = require('./app/addWikiApi')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./app/routes/router');
const port = 8888;

addWikiApi();
app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use('/items', router);

app.listen(port, function () {
    console.log(`Server is listening on ${port}`);
});

