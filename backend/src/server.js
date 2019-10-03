const express =  require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://diego:diego@cluster0-pihyz.mongodb.net/onmnistack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}, () => console.log('Connected to DB'))

app.use(express.json())
app.use(routes)


app.listen(3333, () => console.log('Connected to Server'))