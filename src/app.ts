import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

import routes from './routes'

const app = express()

// Settings
app.set('port', process.env.PORT)

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api', routes)

export default app
