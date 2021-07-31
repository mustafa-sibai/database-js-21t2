const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.connect(
        'mongodb+srv://ViviMoo:DellStreak5@cluster0.ahpmm.mongodb.net/CoolGame?retryWrites=true&w=majority',
        (err) => {
            console.log('Connected to database!');
            console.log(err);
        })
}

module.exports = {
    connectToDB
}