const AppError = require('../utils/AppError')

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

  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('nome obrigatorio')
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController
