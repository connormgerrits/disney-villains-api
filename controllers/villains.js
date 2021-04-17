const models = require('../models')

const getAllVillains = async (request, response) => {
    const villains = await models.Villains.findAll()
    return response.send(villains)
}

const getVillainBySlug = async (request, response) => {
    const { slug } = request.body
    const villain = await models.Villains.findOne({ where: { slug: slug.toLowerCase() } })
    return villain
        ? response.send(villain)
        : response.send('No such villain with that slug exists.')
}

const saveNewVillain = async (request, response) => {
    const { id, name, movie, slug } = request.body

    if (!name || !movie || !slug) {
        return response.status(400).send('The data object you entered is invalid and may be missing data for some elements.')
    }

    const newVillain = await models.Villains.create({ id, name, movie, slug })
    return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }