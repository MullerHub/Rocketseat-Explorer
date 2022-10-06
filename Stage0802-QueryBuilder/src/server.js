require('express-async-errors')

const migrationsRun = require('./database/sqlite/migrations')
/* const database = require('./database/sqlite/') */
const AppError = require('./utils/AppError')
const cors = require('cors')

const express = require('express')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

/* 
const { Database } = require('sqlite')
Database();  trocado pelos dados internos abaixo
 */

migrationsRun()

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT} `))
