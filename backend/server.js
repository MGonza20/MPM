const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

dotenv.config()
const port = process.env.PORTMDB || 5000

const bodyParser = require('body-parser')
const cors = require('cors')

connectDB()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/vets', require('./routes/vetsRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
