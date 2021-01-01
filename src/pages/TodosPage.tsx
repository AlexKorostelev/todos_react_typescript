/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';
import { ITodo } from '../inderfaces';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={addTodoHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default TodosPage;
