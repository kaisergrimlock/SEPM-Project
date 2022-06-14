const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db 

const mongoConnect = () => {
    MongoClient.connect('mongodb+srv://Khoi:1234@cluster0.owhumte.mongodb.net/?retryWrites=true&w=majority'
    ).then(client =>{
        console.log('Connected')
        _db = client.db('user')
        callback()
    }).catch(err => {
        console.log(err)
        throw(err)
    })

}

const getDb = () => {
    if (_db){
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb


