const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");

const database = require('./db')
const usersRouter = require('./routes/user')
const leaderboardRouter = require('./routes/leaderboard')

const app = express()
const PORT = 42069

database.connectToDB();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use('/user', usersRouter);
app.use('/leaderboard', leaderboardRouter);

app.listen(PORT, () => {
    console.log('Express server is listening!!');
})