//
// Builtin https
//
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    resp.on('data', chunk => {
        data += chunk;
    });
    resp.on('end', () => {
        const body = JSON.parse(data);
        console.log('Builtin https (url):\n', body.url);
        console.log('Builtin https (explanation):\n', body.explanation);
        console.log('\n');
    });

}).on('error', err => {
    console.log(err);
});


//
// Request package
//
const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {json: true}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log('Request (url):\n', body.url);
    console.log('Request (explanation):\n', body.explanation);
    console.log('\n');
});


//
// Axios package
//
const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log('Axios (url):\n', response.data.url);
        console.log('Axios (explanation):\n', response.data.explanation);
        console.log('\n');
    })
    .catch(err => {
        console.log(err);
    });

axios.all([
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-01-20'),
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-01-19')
])
    .then(axios.spread((response1, response2) => {
        console.log('Axios (explanation1):\n', response1.data.explanation);
        console.log('Axios (explanation2):\n', response2.data.explanation);
        console.log('\n');
    }))
    .catch(err => {
        console.log(err);
    });


//
// SuperAgent package
//
const superagent = require('superagent');

superagent.get('https://api.nasa.gov/planetary/apod')
    .query({api_key: 'DEMO_KEY', date: '2018-01-21'})
    .end((err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log('SuperAgent (url):\n', res.body.url);
        console.log('SuperAgent (explanation):\n', res.body.explanation);
        console.log('\n');
    });


//
// Got package
//
const got = require('got');

got('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', {json: true})
    .then(response => {
        console.log('Got (url):\n', response.body.url);
        console.log('Got (explanation):\n', response.body.explanation);
        console.log('\n');
    })
    .catch(err => {
        console.log(err);
    });


//
// Frontend-like fetch package
//
const fetch = require('node-fetch');

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
        return res.json();
    })
    .then(json => {
        console.log('Fetch (url):\n', json.url);
        console.log('Fetch (explanation):\n', json.explanation);
        console.log('\n');
    })
    .catch(err => {
        console.log(err);
    });
