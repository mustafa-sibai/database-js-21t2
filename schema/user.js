const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
    dob: String
})

module.exports = userSchema