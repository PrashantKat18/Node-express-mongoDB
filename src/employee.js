const mongoose  = require("mongoose")

const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName : {
        type:String,
    },
    phoneNumber : {
        type:Number,
    },
    email:{
        type:String
    },
    address : {
        type:String
    }
})

const empl = new mongoose.model('employee',employeeSchema);
module.exports = empl;