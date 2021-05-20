const MongoClint = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const client = new MongoClint(url,{useUnifiedTopology: true})
client.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
        const db = client.db('itcdb');
    }
})

module.exports = client