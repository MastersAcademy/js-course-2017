let request = require('request');
let datas = require('./static-data');
let wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&redirects=resolve&search=';
// https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&search=Jacques%20Dubochet


function getData(element) {
    let data = new Promise((resolve, reject) => {
        request(`${ wikiURL }${ element.firstName } ${ element.lastName }`, function (error, response, body) {
            let result =  JSON.parse(body);
            
            // console.log('-----------------------')
            // console.log(JSON.parse(body));
            if (!error && response.statusCode == 200) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
    return data;
}

function getingData() {
    datas.forEach(element => {
        getData(element)
            .then(res => {
                element.url = res[3][0];
                element.info = res[2][0];
            })
            .catch(error => console.log(error));
    });
}

module.exports = getingData;