# Spoke Todo Api

A simple REST api to serve as a backend for the Frontend Engineering Role coding challenge [@Spoke.ai](https://spoke.ai)

Built with: 
1. Node JS
2. Express
3. Prisma 
4. PostgreSQL
5. Deployed to heroku

### Types
```js
type Subtask = {
  title: string,
  completed: boolean,
}

type Todo = {
  id?: string | number,
  title: string,
  notes: string,
  completed: boolean,
  subtasks: Subtask[],
  createdAt?: string,
  updatedAt?: string
}
```

### API Base URL
Is currently running at - [https://spoke-todo.herokuapp.com/](https://spoke-todo.herokuapp.com/)

### End points
| Method | Path             | Data                               | Response                                    |
| ------ | ---------------- | ---------------------------------- | ------------------------------------------- |
| GET    | "/"              | null                               | Returns JSON object with some api meta data |
| GET    | "/api/todos"     | null                               | Returns all Todos in database               |
| POST   | "/api/todos"     | todoItem: Todo                     | Returns created todo item                   |
| GET    | "/api/todos/:id" | {params: id}                       | Returns single todo item of id :id          |
| PUT    | "/api/todos/:id" | {params: id} todo fields to update | Returns updated todo item                   |
| DELETE | "/api/todos/:id" | {params: id}                       | Returns deleted todo item id                |
| DELETE | "/api/todos"     | null                               | Deletes all todo items                      |

