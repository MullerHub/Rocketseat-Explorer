const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class SessionController {
  async create(request, response) {
    const { email, password } = request.body
    return response.json({ email, password })
  }
}

module.exports = SessionController
