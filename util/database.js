const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = () => {
    MongoClient.connect('mongodb+srv://Khoi:1234@cluster0.owhumte.mongodb.net/?retryWrites=true&w=majority'
    ).then(client =>{
        console.log('Connected')
    }).catch(err => {
        console.log(err)
    })

}

module.exports = mongoConnect


