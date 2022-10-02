const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class SessionController {
  async create(request, response) {
    const { email, password } = request.body

    const user = await knex('users').where({ email }).first()

    return response.json(user)
  }
}

module.exports = SessionController
