const express = require('express')
const initDB = require('./config/db')
const app = express()

const port = 3001

const userRouters = require('./app/routes/user')
const itemsRouters = requiere('./app/routes/items')

app.use(userRouters)
app.use(itemsRouters)

app.listen(port, () => {
    console.log('La aplicacion esta en linea!');
})

initDB()