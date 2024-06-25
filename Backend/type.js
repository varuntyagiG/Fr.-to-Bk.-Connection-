const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
  completed: zod.boolean().optional(),
});

const idSchema = zod.object({
  id: zod.string(),
});

module.exports = { createTodo, idSchema };
