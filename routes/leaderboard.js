const express = require('express')
const router = express.Router()

router.get('/', (res, req) => {
    req.send("leaderboard");
})

router.post('/', (res, req) => {

})

module.exports = router