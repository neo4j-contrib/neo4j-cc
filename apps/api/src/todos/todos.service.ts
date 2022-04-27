import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}
  
  create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.item = createTodoDto.item
    return this.todosRepository.save(todo);
  }

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: number) {
    return this.todosRepository.findOne(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.findOne(id)
      .then( (todo) => {
        todo.item = updateTodoDto.item;
        return this.todosRepository.save(todo);
      })
  }

  remove(id: number) {
    return this.todosRepository.delete(id);
  }
}
