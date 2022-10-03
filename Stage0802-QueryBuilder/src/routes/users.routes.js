const { response } = require('express')
const { Router } = require('express')

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const userRoutes = Router()

/*   function myMidlewarre(request, response, next) {
        console.log("iniciou o server");
        next(); }  */

const usersController = new UsersController()

userRoutes.post('/', usersController.create)
userRoutes.put('/', ensureAuthenticated, usersController.update)
userRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  (req, res) => {
    console.log(request.file.filename)
    response.json()
  }
)

module.exports = userRoutes
