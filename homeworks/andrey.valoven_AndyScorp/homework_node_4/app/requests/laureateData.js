let request = require('request');
let datas = require('../models//static-data');
let wikiURL = require('../../server.conf.json').wikiURL;


function getLaureateData(element) {
    let data = new Promise((resolve, reject) => {
        request(`${ wikiURL }${ element.firstName }%20${ element.lastName }`, function (error, response, body) {
            body =  JSON.parse(body);
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                error.code == response.statusCode;
                reject(error);
            }
        });
    });
    return data;
}

module.exports = getLaureateData;