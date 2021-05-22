// const http = require('http')

// http.createServer(function(req,res){
//     res.write("hello");
//     res.end()
// }).listen(5000);

const express = require('express')
const book = require("./books")
const app = express()
const cors = require('cors')
// const bodyParser = require('body-parser')
app.use(cors())
app.use(express.json())
// app.use((bodyParser.json)=>{})

app.get('/books',(req,res)=>{
    let some = book.list({})
    .then((data)=>{res.send(data)},
            (e)=>{console.log("error in get books")})

})
app.get('/books/:cat',(req,res)=>{
    let some = book.list({category : {$eq :req.params.cat}})
    .then((data)=>{res.send(data)},
            (e)=>{console.log("error in get books")})

})

// app.get('/books/:id',(req,res)=>{
//     book.filter(req.params.id).then((data)=>{res.send(data)},(e)=>{res.send("error in get ")})
// })
app.post('/books',(req,res)=>{
    console.log(req.body)
    book.add(req.body)
    .then((data)=>{res.status(200).send({something:"hello world"})    
    },(e)=>{res.send({something:"not working"})})
    
})

app.delete('/books/:id',(req,res)=>{
    book.remove(req.params.id)
    .then((data)=>{
        res.status(200)
        .send({something:"hello world"})
    },(e)=>{res.send({something:"not working"})})
})

app.put('/books/:id',(req,res)=>{
    book.edit({...req.body,id : req.params.id}).then((data)=>{console.log("edit worked")},(e)=>{console.log(e)})
})

app.listen(5001,()=>{
    console.log("server run 5001")
})
