const _ = require("lodash")
const process = require("process")
const cmd = require("yargs").argv
const fs = require('fs')

if(cmd._[0]==="add"){
    fs.readFile('data.json',(e,data)=>{
        const book = JSON.parse(data.toString())
        book.push({title:cmd.title,category:cmd.category})
        const ob = JSON.stringify(book)
        fs.writeFile('data.json',ob,(e)=>!e?console.log("good"):console.log("error in writing"))
    })
    
}
if(cmd._[0]==="delete"){
    fs.readFile('data.json',(e,data)=>{
        const book = JSON.parse(data.toString())
        const filt = book.filter((b)=>b.title !== cmd.title)
        const ob = JSON.stringify(filt)
        fs.writeFile('data.json',ob,(e)=>!e?console.log("good"):console.log("error in writing"))
    })
    
}