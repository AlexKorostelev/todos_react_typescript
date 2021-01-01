/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  function addTodoHandler(event: React.FormEvent) {
    event.preventDefault();
    ref.current!.focus();
    if (!ref.current!.value) {
      return;
    }
    props.onAdd(ref.current!.value);
    ref.current!.value = '';
  }

  return (
    <form onSubmit={addTodoHandler} className="formdivcenter">
      <input ref={ref} placeholder="Введите название дела" style={{ marginBottom: 0 }} type="text" id="title" />
      <button className="blue darken-3 btn waves-effect waves-light" type="submit" style={{ minWidth: '120px' }} name="action">Добавить</button>
    </form>
  );
};

export default TodoForm;
