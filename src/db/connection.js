const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/crud" , {
    useUnifiedTopology: true 
}).then(()=>{
    console.log("success");
}).catch((e)=>{
    console.log(e);
})