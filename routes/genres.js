const express = require('express')
const router = express.Router()

let genresList = [
  {id: 1, name: 'drama'},
  {id: 2, name: 'scifi'},
  {id: 3, name: 'anime'},
]

console.log(genresList)


// if on genres endpoint (no longer /api/genres as defined in index)
router.get('/', (req, res) => {
  res.send(genresList)
})

//fetch a genre by name
router.get('/:name', (req, res) => {
  const requestedGenre = genresList.find(item => item.name === (req.params.name).toLowerCase())

  if (!requestedGenre) {
    return res.status(404).send('This genre was not found')
  }

  res.send(requestedGenre)
})

// add a new genre
router.post('/', (req, res) => {

  // if request is bad
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).send('Please send a genre of at least 3 characters in length')
  }

  // check if genre exists already
  const genre = genresList.find(item => item.name === (req.body.name).toLowerCase())
  if (genre) {
    return res.status(404).send('Aww, thanks. This genre already exists')
  }

  // if it doesn't exist
  const newGenre = {
    id: genresList.length + 1,
    name: req.body.name
  }

  genresList.push(newGenre)

  res.send(newGenre)
})

// changing by id
router.put('/:id', (req, res) => {
  //find the id, 404 if it doesn't exist
  const genre = genresList.find(item => item.id === parseInt(req.params.id))
  if (!genre) {
    return res.status(404).send('The given course id does not exist')
  }

  // update it
  genre.name = req.body.name

  //send updated course
  res.send(genre)
})

//deleting by name
router.delete('/:name', (req, res) => {
  //find given id, 404 if it doesn't exist
  const found = genresList.find(item => item.name === req.params.name)
  if (!found) {
    return res.status(404).send('The given genre does not exist');
  }
  
  // delete 
  const index = genresList.indexOf(found) //find course index
  genresList.splice(index, 1)

  //send deleted course
  res.send(found)
})

module.exports = router;