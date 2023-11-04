const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/employee_registration" , {
    useUnifiedTopology: true 
}).then(()=>{
    console.log("success");
}).catch((e)=>{
    console.log(e);
})


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://prashant:<password>@cluster0.x0juntj.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });