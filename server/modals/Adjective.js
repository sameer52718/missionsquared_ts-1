const mongoose = require("mongoose");


const Adjective = mongoose.Schema({
    adjective:{
        type: String,
    }
});


module.exports = mongoose.model('Adjective', Adjective);