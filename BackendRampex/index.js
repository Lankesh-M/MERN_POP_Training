const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>Hello Backend</h1>`)
});

    


app.listen(3002, ()=>{
    console.log("Hello i am in Terminal")
});