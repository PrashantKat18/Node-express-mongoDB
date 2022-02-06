const express = require('express');
require("./db/connection");
const app = express();
const employee = require('./employee')
const port = process.env.PORT || 6000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

app.post("/employee", async (req, res) => {
    console.log(req.body);
    try {
        const emp = new employee(req.body);
        const createEmp = await emp.save();
        res.status(201).send(createEmp)
    } catch (e) {
        res.status(400).send(e);
    }
})


app.listen(port, () => {
    console.log(`connection is setup dddst ${port}`);
})