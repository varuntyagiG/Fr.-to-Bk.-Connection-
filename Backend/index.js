const express = require("express");
var cors = require('cors');
const { Todo } = require('./db');
const { createTodo, idSchema } = require('./type');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const data = req.body;
  let result = createTodo.safeParse(data);
  console.log(result);
  if (!result.success) {
    res.status(404).json({
      msg: "input not validate",
    });
  } else {
    const newTodo = await Todo.create({
      title: data.title,
      description: data.description,
      completed: false
    });
    console.log(newTodo);
    res.json({
      Todo: newTodo
    });
  }
});

app.get("/todos", async (req, res) => {
  let all_todo = await Todo.find({});
  console.log(all_todo);
  res.json({
    all_todo
  })
});

app.put("/completed", (req, res) => {
  let id = req.body;
  let result = idSchema.safeParse(id);
  if (!result.success) {
    res.status(404).json({
      msg: "id incorrect"
    })
  } else {
    Todo.findByIdAndUpdate({
      _id: req.body.id
    }, { completed: true }, { runValidators: true })
  }
  res.json({
    msg: "todo updated"
  })
});

app.listen(4004);
