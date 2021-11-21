const { Router } = require("express");

const router = Router();

const todoController = require("../controllers/todoController");

router.get("/", todoController.getAllTodos);
router.post("/", todoController.createTodo);
router.get("/:id", todoController.getSingleTodo);
router.put("/:id", todoController.updateSingleTodo);
router.delete("/:id", todoController.deleteSingleTodo);
router.delete("/", todoController.deleteAllTodos)

module.exports = router;
