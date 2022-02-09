const express = require('express');
require("./db/connection");
const app = express();
const employee = require('./employee')
const port = process.env.PORT || 6000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

// add employee details
app.post("/employee", async (req, res) => {
    try {
        const emp = new employee(req.body);
        const createEmp = await emp.save();
        res.status(201).send(createEmp)
    } catch (e) {
        res.status(400).send(e);
    }
})

// get employee details
app.get("/employee", async (req, res) => {
    try {
        const emp = await employee.find();
        res.send(emp);
    } catch (e) {
        res.status(400).send(e);
    }
})

// get the individual data using id
app.get("/employee/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const emp = await employee.findById(_id);
        if (!emp) {
            return res.status(404).send();
        } else {
            res.send(emp)
        }
    } catch(e) {
        res.send(e);
    }
})

// update employee details
app.patch("/employee/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateemp = await employee.findByIdAndUpdate(_id,req.body,{new:true});
        if (!updateemp) {
            return res.status(404).send();
        } else {
            res.send(updateemp)
        }
    } catch(e) {
        res.send(e);
    }
})

//delete employee details
app.delete("/employee/:id",async(req,res)=>{
    try {
      const _id = req.params.id;
      const deleteEmp = await employee.findByIdAndDelete(_id);
      if(!_id){
       return res.status(400).send();
      }
      res.send(deleteEmp)
    }
    catch(e){
        res.status(500).send(e);
    } 
})


app.listen(port, () => {
    console.log(`connection is setup dddst ${port}`);
})

