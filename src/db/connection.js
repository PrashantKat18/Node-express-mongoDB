const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/employee_registration" , {
    useUnifiedTopology: true 
}).then(()=>{
    console.log("success");
}).catch((e)=>{
    console.log(e);
})