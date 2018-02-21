let mongoose = require('mongoose');
let Laureate = require('./../models/laureate');

module.exports = function(firstName, lastName, bornCountry, info, url) {
    return new Laureate({
        _id: mongoose.Types.ObjectId(),
        firstName: firstName,
        lastName: lastName,
        bornCountry: bornCountry,
        info: info,
        url: url
    });
}

