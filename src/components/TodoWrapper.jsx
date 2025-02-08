import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todoList, setTodoList] = useState(() => {
    // Load from local storage if available, otherwise start with an empty array
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const cancelUpdate = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  const updateValue = (id, editedValue) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, task: editedValue, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="bg-[#1A1A40] mt-20 p-8 rounded">
      <h1 className="text-white text-center">Track Your Daily To-Do</h1>
      <TodoForm setTodoList={setTodoList} todoList={todoList} />
      <button
        className="bg-[#8758ff] text-white border-none p-2 mb-2 cursor-pointer"
        onClick={() => setTodoList([])}
      >
        Clear List
      </button>
      {todoList.map((todo, i) => {
        console.log(todo);
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            cancelUpdate={cancelUpdate}
            updateValue={updateValue}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
