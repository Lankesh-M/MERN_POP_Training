const mdb = require('mongoose')

const signupSchema = mdb.Schema(
    {
        firstName : String,
        lastName : String,
        email : String,
        password : String,
        age : Number,
    }
)

const signup = mdb.model('signup', signupSchema);

module.exports = signup;