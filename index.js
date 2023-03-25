const app = require('./app')
const db = require('./database')
 const userModel = require('./user.model')
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')

 mongoose.connect("mongodb+srv://aishwaryadevi2004:Aish123@cluster0.szomitx.mongodb.net/form")
 app.use(bodyParser.urlencoded({extended:true}))
 app.use(bodyParser.json())
 app.use(cors());
 app.use('/',require('./router'))

app.get('/', (req,res)=>{
    res.send('Working!');
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log("Server running on 5000")
})