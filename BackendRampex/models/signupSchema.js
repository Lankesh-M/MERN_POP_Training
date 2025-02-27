const mdb = require('mongoose')

const signupSchema = mdb.Schema(
    {
        firstName : String,
        lastName : String,
        email : String,
        // age : Number,
        password : String,
    }
)

const signup = mdb.model('signup', signupSchema);

module.exports = signup;