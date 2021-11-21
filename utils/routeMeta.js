module.exports = [
  {
    path: '/',
    method: 'GET',
    data: null,
    response: 'Returns api meta data',
  },
  {
    path: '/api/todos',
    method: 'GET',
    data: null,
    response: 'Returns all todos',
  },
  {
    path: '/api/todos',
    method: 'POST',
    data: {
      title: 'string',
      notes: 'string',
      completed: false,
      subtasks: [
        {
          title: 'string',
          completed: false,
        }
      ],
    },
    response: 'Returns created todo item',
  },
  {
    path: '/api/todos/:id',
    method: 'GET',
    data: null,
    response: 'Returns todo item with id :id',
  },
  {
    path: '/api/todos/:id',
    method: 'PUT',
    data: {
      title: 'string',
      notes: 'string',
      completed: false,
      subtasks: [
        {
          title: 'string',
          completed: false,
        }
      ]
    },
    response: 'Returns updated todo item',
  },
  {
    path: '/api/todos/:id',
    method: 'DELETE',
    data: null,
    response: 'Returns deleted todo item id',
  },
  {
    path: '/api/todos',
    method: 'DELETE',
    data: null,
    response: 'Deletes all todos - returns count of deleted todo items',
  },
]