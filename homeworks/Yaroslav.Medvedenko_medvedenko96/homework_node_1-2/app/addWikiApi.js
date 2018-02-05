const data = require('./models/static-data');
const request = require('request');

module.exports = function () {
    return data.forEach(function (item){
        const lastName = item.lastName;
        const firsName = item.firstName;
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&generator=redirects&search=" + firsName + "_" + lastName;

        request(url , {json: true}, (err, res, body) => { // ругулярка не працює походу
            if (err || res.statusCode !== 200) {
                console.error(err || `code: ${res.statusCode}, message: ${res.statusMessage}`)
            }

            item.info = body[2][0];
            item.url = body[3][0];
            console.log(data)

        });
    });
};