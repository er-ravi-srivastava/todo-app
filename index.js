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
        completed:false
    })

    res.json({
        msg: "todo created"
    })



})

app.post("/todos", async function(req,res){

    const todo = await todo.find({});
    console.log(todos) 
})

app.put("/completed"), async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    
    if (!parsedPayload.success) {
        return res.status(400).json({
            msg: "You sent the wrong inputs"
        })

        return;
    }

    await todo.update({
        _id: req.body.id

    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })

};

app.listen(3000);