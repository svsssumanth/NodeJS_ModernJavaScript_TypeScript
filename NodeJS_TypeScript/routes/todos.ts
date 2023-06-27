import { Router } from 'express';
import { Todo } from '../models/todo';

//type casting
type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();



router.get('/', (req, res, next) => {
    res.status(200).json({todos: todos});
});

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(newTodo);
    res.status(201).json({message: 'Added Todo', todos: todos, todo: newTodo})
})

router.put('todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    const body = req.body as RequestBody;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(todo => todo.id === tid);
    if (todoIndex > -1) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        }
        return res.status(200).json({message: 'Updated Todo', todos: todos})
    }
    res.status(404).json({message: 'Could not find todo for this id'});
})


router.delete('todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({message: 'Deleted Todo', todos: todos})
})

export default router; //default export so we directly call routes import without {}


