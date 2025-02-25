// const express = require("express");
// const mdb = require("mongoose");
// const dotenv = require("dotenv");
// const { default: signup_schema } = require("./models/signupSchema");
// dotenv.config();
// const bodyParser = require('body-parser')


// const app = express();
// app.use(bodyParser.json());

// console.log(process.env.MONGODB_URL);
// mdb
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("MongoDB connected Successfully");
//   })
//   .catch((err) => {
//     console.log("Connection Failed", err);
//   });


// app.get("/", (req, res) => {
//   res.send(`<h1>Hello Backend</h1>`);
// });

// app.post('/signup', async (req, res) => {
//     const {firstName, lastName} = req.body;
//     console.log(firstName, lastName)
//     try{
//         const newSignup = new signup_schema({
//             firstName : firstName,
//             lastName  : lastName,
//         })
//         await newSignup.save();
//         res.status(200).json({msg:'Signup success'});
//     }catch(err){
//         res.status(400).json({msg:'Signup unsuccess', err});
//     }
// })

// app.listen(3002, () => {
//   console.log("Hello i am in Terminal");
// });
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const signup_schema = require("./models/signupSchema");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("MONGODB_URL:", process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

app.get("/", (req, res) => {
  res.send("<h1>Hello Backend</h1>");
});

app.post("/signup", (req, res) => {
  const { firstName, lastName, email, age} = req.body;
  console.log(firstName, lastName);

  try {
    const newSignup = new signup_schema({
      firstName: firstName,
      lastName: lastName,
      email : email,
      age : age
    });
    newSignup.save();
    res.status(200).json({ msg: "Signup success" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({ msg: "Signup unsuccess", error: err.message });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
