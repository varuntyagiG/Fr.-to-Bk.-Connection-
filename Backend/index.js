const express = require("express");
var cors = require('cors');
const { Todo } = require('./db');
const { createTodo, idSchema } = require('./type');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/todo", async (req, res) => {
  const data = req.body;
  let result = createTodo.safeParse(data);
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
    res.json({
      Todo: newTodo
    });
  }
});

app.get("/api/todos", async (req, res) => {
  let all_todo = await Todo.find({});
  res.json({
    all_todo
  })
});

app.put("/api/completed", (req, res) => {
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
