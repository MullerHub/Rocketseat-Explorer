const { Router } = require('express')

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const userRoutes = Router()

/*
function myMidlewarre(request, response, next) {
  console.log("iniciou o server");

  next();
}  */

const usersController = new UsersController()

userRoutes.post('/', usersController.create)
userRoutes.put('/', ensureAuthenticated, usersController.update)

module.exports = userRoutes
