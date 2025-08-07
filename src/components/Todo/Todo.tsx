'use client';

import React, { useState } from 'react';
import Styles from './Todo.module.scss';
import { CustomButton } from '../Button';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

type TodoProps = {
  id: number;
  text: string;
  complete: boolean;
};

export const AddToDo: React.FC<TodoProps> = ({ id, text, complete }) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: TodoProps = {
      id: Date.now(),
      text: inputValue,
      complete: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteSelected = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  return (
    <div className={Styles.addTodoWrap}>
      <h3>To Do</h3>
      <div className={Styles.card}>
        <p>
          <strong>Add a new task</strong>
        </p>

        <div className={Styles.inputWrapper}>
          <input
            type='text'
            value={inputValue}
            placeholder='Task here'
            onChange={(e) => setInputValue(e.target.value)}
            className={Styles.inputTodo}
          />

          <CustomButton onClick={addTodo} size='small' variant='primary'>
            Add Todo
          </CustomButton>
        </div>

        <div className={Styles.listTodo}>
          {todos.map((todo) => (
            <div key={todo.id} className={Styles.todoItem}>
              <input
                type='checkbox'
                checked={todo.complete}
                onChange={() => toggleTodo(todo.id)}
              />
              <div className={Styles.todoText}>{todo.text}</div>
              {todo.complete ? (
                <FaTimesCircle
                  color='red'
                  size={20}
                  onClick={() => deleteTodo(todo.id)}
                  className={Styles.iconDelete}
                />
              ) : (
                <FaCheckCircle
                  color='#6DD230'
                  size={20}
                  className={Styles.iconCheck}
                />
              )}
            </div>
          ))}
        </div>

        <CustomButton onClick={deleteSelected} size='small' variant='danger'>
          Delete Selected
        </CustomButton>
      </div>
    </div>
  );
};
