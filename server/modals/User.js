const mongoose = require("mongoose");

const User = mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: false,
        default: ''
    },
    role:{
        type: String,
        default: 'guest',
    },
    permission:{
        type: String,
        default: 'can_not_edit'
    },
});


module.exports = mongoose.model("User", User);