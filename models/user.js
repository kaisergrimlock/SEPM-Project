const db = require('../util/database').getDB

class User{
    constructor(username, email, password){
        this.name = username
        this.email = email
        this.password = password
    }


}