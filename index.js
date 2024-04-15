const express = require("express");
const { createTodo } = require("./types");
const app = express();
const { todo } = require("./db");




app.use(express.json());


app.post("/todo",async function(req,res){
const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if(!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
}

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })

    res.json({
        msg: "todo created"
    })



})

app.post("/todos",function(req,res){

const 

})

app.put("/completed",function(req,res){

})