const mongoose = require('mongoose');
const validator = require("validator");


//Optimize:  ************************** Flex Modal Schema ******************************
const flexSchema = new mongoose.Schema({
    images: [String],
});


const Flex = mongoose.model('Flex', flexSchema);


module.exports = Flex;