const client = require('./db')

const db = client.db('itcdb_new');
const collection = db.collection('book');

const add = async (book) => {
    await collection.insertOne(book)
    client.close()
}

const remove = async (id_) => {
    console.log(id_);
    await collection.remove({id:{$eq:id_}},true)  
    client.close()  
}


const list = async () => {
    console.log("hi hello")
    var cursor = await collection.find({}).toArray().then((data)=>data,(error)=>"error")
    console.log(cursor)
    client.close()
}

module.exports = {add,remove,list}