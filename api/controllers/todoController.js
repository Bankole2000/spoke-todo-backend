const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({});

module.exports.getAllTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } });
    res.status(200).json({ message: "Get All Todos Working", success: true, errors: null, data: todos });
  } catch (e) {
    console.log({ e });
    const errors = [];
    errors.push(e.message);
    res.status(500).json({ message: e.message, success: false, errors, data: null })
  }
}

module.exports.createTodo = async (req, res) => {
  console.log(req.body)
  let { title, notes, completed, subtasks } = req.body

  if (!subtasks) {
    subtasks = [];
  }
  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        notes,
        subtasks,
        completed,
      }
    })
    console.log(todo)

    res.status(200).json({ message: "Todo Created", success: true, errors: null, data: todo })
  } catch (e) {
    console.log({ e })
    const errors = [];
    errors.push(e.message);
    res.status(500).json({ message: e.message, success: false, errors, data: null })
  }
}

module.exports.getSingleTodo = async (req, res) => {
  let { id } = req.params;
  if (!Boolean(Number(id))) {
    res.status(400).json({ message: "Invalid Todo Id", success: false, errors: ["Invalid ID"], data: null })
    return;
  }
  console.log({ id })
  try {
    const todo = await prisma.todo.findUnique({
      where: {
        id: +id,
      }
    })
    if (todo) {
      res.status(200).json({ message: "Todo details loaded", success: true, errors: null, data: todo })
    } else {
      res.status(404).json({ message: "Couldn't find this todo", success: false, errors: [`No todo with the id: ${id}`], data: null })
    }
  } catch (e) {
    console.log({ e });
    const errors = [];
    errors.push(e.message);
    res.status(500).json({ message: e.message, success: false, errors, data: null })
  }
}

module.exports.updateSingleTodo = async (req, res) => {
  let { id } = req.params
  if (!Boolean(Number(id))) {
    res.status(400).json({ message: "Invalid Todo Id", success: false, errors: ["Invalid ID"], data: null })
    return;
  }
  let { title, notes, completed, subtasks } = req.body
  const data = {}
  if (completed === true || completed === false) data.completed = completed;
  if (title) data.title = title;
  if (notes) data.notes = notes;
  if (subtasks) data.subtasks = subtasks;
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: +id },
      data: data
    })
    res.status(200).json({ message: "Todo Updated", success: true, errors: null, data: updatedTodo })
  } catch (e) {
    console.log({ e });
    const errors = [];
    errors.push(e.message);
    res.status(500).json({ message: e.message, success: false, errors, data: null })
  }
}

module.exports.deleteSingleTodo = async (req, res) => {
  let { id } = req.params
  if (!Boolean(Number(id))) {
    res.status(400).json({ message: "Invalid Todo Id", success: false, errors: ["Invalid ID"], data: null })
    return;
  }
  const todoToDelete = await prisma.todo.findUnique({ where: { id: +id } })
  if (!todoToDelete) {
    res.status(404).json({ message: "Couldn't delete this todo as it doesn't exist", success: false, errors: ["Todo Not Found"], data: null })
    return;
  }
  try {
    const deletedTodo = await prisma.todo.delete({
      where: { id: +id },
    })
    console.log({ deletedTodo })
    res.status(200).json({ message: "Todo Deleted", success: true, errors: null, data: id });
  } catch (e) {
    console.log({ e });
    const errors = [];
    errors.push(e.message);
    res.status(500).json({ message: e.message, success: false, errors, data: null })
  }
}

module.exports.deleteAllTodos = async (req, res) => {
  try {
    const deletedTodos = await prisma.todo.deleteMany();
    console.log({ deletedTodos })
    res.status(200).json({ message: "All Todos Deleted", success: true, errors: null, data: deletedTodos });
  } catch (e) {
    console.log({ e });
    const errors = [];
    errors.push(e.message);
    res.status(500).json({ message: e.message, success: false, errors, data: null })
  }
}