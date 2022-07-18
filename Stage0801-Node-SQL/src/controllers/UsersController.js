const { hash } = require('bcryptjs')

const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class UsersController {
  /* 
      Como uma boa prática
      um CONTROLLER vai ter no MAXIMO cinco FUNCION, que são:

      index - GET para listar varios registros.
      show - GET para exibir um registro especifico.
      create - POST para criar um registro.
      update- PUT para atualizar um registro.
      delete - DELETE para remover um registro.
      ----------------------------------------
      Se precisar de mais de 5 metodos
      é porque é uma boa prática  dividir os metodos
    */

  async create(request, response) {
    const { name, email, password } = request.body
    const database = await sqliteConnection()
    const checkUserExists = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (checkUserExists) {
      throw new AppError('Email em uso')
    }

    const hashedPassword = await hash(password, 8)

    await database.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email } = request.body
    const { id } = request.params

    const database = await sqliteConnection()
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id])

    if (!user) {
      throw new AppError('usuario não encontrado')
    }
    const userWithUpdatedEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('este email já está em uso.')
    }
    user.name = name ?? user.name
    user.email = email ?? user.email

    await database.run(
      `
    UPDATE users SET
    name = ?,
    email = ?,
    updated_at = ?
    WHERE id = ?`,
      [user.name, user.email, new Date(), id]
    )

    return response.status(200).json()
  }
}

module.exports = UsersController
