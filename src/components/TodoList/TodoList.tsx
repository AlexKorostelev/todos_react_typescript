/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ITodo } from '../../inderfaces';

type TodoListProps = {
  todos: ITodo[],
  onToggle(id: number): void,
  onRemove(id: number): void,
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => (todos.length === 0 ? (<p className="center">Пока дел нет!</p>) : (
  <div className="todolistdiv">
    <ul>
      {
        todos.map((todo) => (
          <li className={todo.completed === true ? 'todo completed' : 'todo'} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>delete</i>
            </label>
          </li>
        ))
      }
    </ul>
  </div>
));

export default TodoList;
