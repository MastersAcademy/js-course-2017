let request = require('request');
let datas = require('../models//static-data');
let getLaureateData = require('./laureateData');
let wikiURL = require('../../server.conf.json').wikiURL;



function getingData() {
    datas.forEach(element => {
        getLaureateData(element)
            .then(res => {
                element.url = res[3][0];
                element.info = res[2][0];
            })
            .catch(error => console.log(error));
    });
}

module.exports = getingData;