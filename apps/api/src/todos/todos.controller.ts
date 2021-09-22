import { Controller, Get, Post } from '@nestjs/common';
import { Todo } from '@neo4j-cc/model';

const todos: Todo[] = [{title:'Do this'}, {title:'Then this'}];

@Controller('todos')
export class TodosController {

  @Post()
  create(): Todo {
    const newTodo = {
      title: `New todo for abk #${Math.floor(Math.random() * 1000)}`,
    };
    todos.push(newTodo);
    return newTodo;
  }
  
  @Get()
  findAll(): Todo[] {
    return todos;
  }
}
