//Quality Screen app

const express = require('express')
// returns an object w http verbs. object is the express application
const app = express()
//middleware for parsing incoming requests w json payloads
app.use(express.json());


//! defining routes
const home = require('./routes/home')
const genres = require('./routes/genres')
// for root endpoints, use the home router
app.use('/', home)
// for api/genres endpoints, use genres router
app.use('/api/genres', genres)


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))







