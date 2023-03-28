import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import pokemon_route from './Routes/pokemon_ruote'

//constants for express and dotenv
const app = express()
const port = 5000

//setup database connection
const URI = 'mongodb+srv://veinz:veinz34792061@badb.r23yftl.mongodb.net/Character-API?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
mongoose.connect(URI)
    .then(() => {
        console.log('Connected to MongoDB successfully')
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.log('err ', err)
    })

//HTTP Update and show log
app.use(morgan('tiny'))

//apply middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: false,
    limit: '300mb'
}))

//set request and response methods
app.use('/character', pokemon_route)