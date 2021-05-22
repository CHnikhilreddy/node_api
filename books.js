const client = require('./db')

const db = client.db('itcdb_new');
const collection = db.collection('book');

const add = (book) => {
    return new Promise(async (resolve,reject)=>{
        try{
            await collection.insertOne(book)
            resolve("hello")
        }catch(e){
            reject("error")
        }
    })
}


const remove = async (id_) => {
    return new Promise(async (resolve,reject)=>{
        try{
            await collection.deleteOne({id:{$eq:+id_}},true)
            resolve("h")  
        }catch(e){
            reject("error")
        }
    })
}


const list =  () => {
    return new Promise(async (resolve,reject)=>{
        try{
            resolve(await collection.find().toArray())  
        }catch(e){
            reject("error")
        }
    })
}

const filter = (title) => {
    return new Promise(async (resolve,reject)=>{
        try{
            var arr = await collection.findOne({id : {$eq : title}})//.toArray()
            resolve(arr)  
        }catch(e){
            reject("error")
        }
    })
}
const find_filter = (id) => {
    return new Promise(async (resolve,reject)=>{
        try{
            console.log(id)
            var arr = await collection.findOne({id : id},true).toArray()
            console.log(arr)
            resolve(arr)  
        }catch(e){
            reject("error")
        }
    })
}
const edit = (book) =>{
    console.log(book)
    return collection.updateOne({id:{$eq:+book.id}},{$set:{title:book.title}})
}

module.exports = {add,remove,list,filter,edit,find_filter}