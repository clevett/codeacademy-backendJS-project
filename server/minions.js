const minionsRouter = require('express').Router()

module.exports = minionsRouter;

//GET /api/minions to get an array of all minions
minionsRouter.get('/', (req, res, next) => {

})

//POST /api/minions to create a new minion and save it to the database.
minionsRouter.post('/', (req, res, next) => {

})

//GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get('/:minionId', (req, res, next) =>{

})

//PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put('/:minionId', (req, res, next) => {

})

//DELETE /api/minions/:minionId to delete a single minion by id.
minionsRouter.delete('/:minionId', (req, res, next) => {
  
})
