const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const signup_schema = require("./models/signupSchema");
const bcrypt = require('bcrypt');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

console.log("MONGODB_URL:", process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

app.get("/", (req, res) => {
  res.send("<h1>Hello Backend</h1>");
});

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, age} = req.body;
  console.log(firstName, lastName);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new signup_schema({
      firstName: firstName,
      lastName: lastName,
      email : email,
      password : hashedPassword,
      age : age
    });
    newSignup.save();
    console.log(newSignup);
    res.status(200).json({message: "Signup success", isSignup : true});
  } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({ message: "Signup unsuccess", error: err.message, isSignup : false });
  }
});

app.get('/getuserdet', async (req, res)=> {
  const allusers = await signup_schema.find();
  console.log(allusers);
  res.json({msg:"Signup Details Fetched"});
})

app.post('/login', async (req, res) => {
  console.log(req.body)
  try{
    const {email, password} = req.body;
    const isExistingUser = await signup_schema.findOne({email:email });
    console.log(isExistingUser)
    if(isExistingUser){
      console.log(password, isExistingUser.password)
      const isValidPass = await bcrypt.compare(password, isExistingUser.password);
      console.log(isValidPass)
      if(isValidPass){
        return res.status(200).json({message: "Login Successfully", isLoggedIn:true})
      }else{
       return  res.status(200).json({message: "Incorrect Password", isLoggedIn:false})
      }
    }else{
       return res.status(400).json({message:"User not Found Please Signin First", isLoggedIn:false})
    }
  }catch(err){
    return  res.status(400).json({msg : "Erro occurred in Login"})
  }
})


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
