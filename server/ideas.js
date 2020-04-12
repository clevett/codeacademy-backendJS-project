const ideasRouter = require('express').Router()

module.exports = ideasRouter;

//GET /api/ideas to get an array of all ideas.
ideasRouter.get('/', (req, res, next) => {

})

//POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post('/', (req, res, next) => {

})

//GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get('/:ideaId', (req, res, next) => {

})

//PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put('/:ideaId', (req, res, next) => {

})

//DELETE /api/ideas/:ideaId to delete a single idea by id
ideasRouter.delete('/:ideaId', (req, res, next) => {

})
