import './todos-page.module.scss';
import { Todo } from '@neo4j-cc/model';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface TodosPageProps {}

export function TodosPage(props: TodosPageProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/todos', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  
  return (
    <div>
      <h1 className="font-bold text-red-700">Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default TodosPage;
