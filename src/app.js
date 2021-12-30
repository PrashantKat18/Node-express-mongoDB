const express = require('express');
require("./db/connection");
const app = express();
const port = process.env.PORT || 6000;

app.get("/" ,(req,res)=>{
    res.send("hello");
})

app.get("/students",(req,res) => {
    res.send("hello");
})


app.listen(port ,()=>{
    console.log(`connection is setup dddst ${port}`);
})