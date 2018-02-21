let request = require('request');
let datas = require('../models//static-data');
let getLaureateData = require('./laureateData');
let wikiURL = require('../../server.conf.json').wikiURL;
let mongoose = require('mongoose');
let addItemDB = require('./../dataBase/setDataDB');


function getingData() {
    datas.forEach(element => {
        getLaureateData(element)
            .then(res => {
                element.url = res[3][0];
                element.info = res[2][0];
                addItemDB(element.firstName, element.lastName, element.bornCountry, res[2][0],res[3][0]).save()
                    .then(() => {
                        console.log('done');
                    }).catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => console.log(error));
    });
}

module.exports = getingData;