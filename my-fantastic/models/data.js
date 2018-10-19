const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const dataSchema = new Schema({
timestamp: String,
code: String,
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
