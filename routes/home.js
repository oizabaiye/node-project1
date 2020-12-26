// returns an object w http verbs, i.e. the express application
const express = require('express')
const router = express.Router() // using bcuz routes in separate folder

// loading root of app (if in index.js it'll be app.get)
router.get('/', (req, res) => {
  res.send('Welcome to Quality Screen')
})

module.exports = router;