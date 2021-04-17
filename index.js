const express = require('express')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getVillainBySlug)

app.post('/villains', saveNewVillain)

app.all('*', (request, response) => {
    return response.status(404).send("Most unfortunately, there is nothing here.")
})

app.listen(1337, () => {
    console.log("Listening on port 1337...")
})