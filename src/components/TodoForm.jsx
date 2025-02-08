import React, { useState } from "react";

const TodoForm = ({ setTodoList, todoList }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return alert("Please add tasks");

    setTodoList([
      ...todoList,
      {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
        task: task,
        isCompleted: false,
        isEditing: false,
      },
    ]);
    setTask("");
  };

  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-none border border-[#8758ff] px-4 py-2 mt-4 mb-8 w-[300px] text-white"
        placeholder="Add your to-do task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#8758ff] text-white border-none p-[0.55rem] cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
