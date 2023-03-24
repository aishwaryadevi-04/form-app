const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://aishwaryadevi2004:Aish123@cluster0.szomitx.mongodb.net/?retryWrites=true&w=majority')
.on('open',()=>{
    console.log('Mongodb connected')
});

module.exports = connection