const express = require("express");
const { createTodo } = require("./types");
const app = express();
const  DB  = require("./db");




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

app.get("/todos", async function(req, res) {
    try {
        const todo = await DB.todo.find({});
        console.log(todo);
        res.send(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching the todos.");
    }
});

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
console.log("server connected");