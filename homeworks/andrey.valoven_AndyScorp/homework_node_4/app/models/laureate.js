let mongoose = require('mongoose');

const laureateSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    bornCountry: String,
    info: String,
    url: String
});

module.exports = mongoose.model('Laureate', laureateSchema);
