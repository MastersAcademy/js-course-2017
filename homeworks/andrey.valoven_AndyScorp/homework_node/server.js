let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let router = require('./app/routes/router');
const port = 3000;

app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use('/items', router);

app.listen(port, function () {
    console.log(`Server is listening on ${port}`);
});
