const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const { compare } = require('bcryptjs')

class SessionController {
  async create(request, response) {
    const { email, password } = request.body

    const user = await knex('users').where({ email }).first()

    if (!user) {
      throw new AppError('E-mail e/ou senha incorreta', 401)
    }

    return response.json(user)
  }
}

module.exports = SessionController
