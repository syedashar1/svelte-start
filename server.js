const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const { port, mongoURI } = require('./config')
const transactionsRoutes = require('./routes/transactions')
const path = require('path')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

mongoose.connect("mongodb+srv://ashar1:ashar1@cluster0.ybb8j.mongodb.net/Expense-Tracker?retryWrites=true&w=majority" , {
        useNewUrlParser : true ,
        useCreateIndex : true ,
        useUnifiedTopology : true } , 
        ()=>{console.log("connected to the DB")}
)

app.use('/api/transactions', transactionsRoutes)
app.get('/' , (req, res) =>  res.send('Svelte bitches!')  )

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/public'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
//     })
// }

app.listen( 3000, () => console.log('Express is running at port ' + 3000))