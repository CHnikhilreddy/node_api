const _ = require("lodash")
const process = require("process")
const cmd = require("yargs").argv
const fs = require('fs')
const book = require('./books')

if(cmd._[0]==="add"){
    const new_book = {   
        title:cmd.title,
        category:cmd.category,
        id:Math.round(Math.random()*1000)
    }
    book.add(new_book)
    
}
else if(cmd._[0]==="delete"){
    book.remove(cmd.id)
}
else if(cmd._[0]==="list"){
    book.list()
}
else if(cmd._[0]==="filter"){
    book.filter(cmd.title)
}
else if(cmd._[0]==="edit"){
    book.edit({id:cmd.id,title:cmd.title,category:cmd.category})
}