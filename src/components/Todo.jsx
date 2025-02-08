import { useState } from "react";
import { BiSolidEdit, BiSolidTrashAlt } from "react-icons/bi";

const Todo = ({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
  cancelUpdate,
  updateValue,
}) => {
  const [editValue, setEditValue] = useState(todo.task);
  return (
    <div className="w-full flex justify-between items-center bg-[#8758ff] text-white p-3 rounded mb-4">
      {todo.isEditing ? (
        <>
          <input
            className="outline-none bg-[#1A1A40] border border-[#8758ff] p-2 w-[220px] text-white"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />

          <button
            className="bg-[#2d1d55] text-white border-none p-[0.50rem] cursor-pointer mx-1.5"
            onClick={() => cancelUpdate(todo.id)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#2d1d55] text-white border-none p-[0.50rem] cursor-pointer"
            onClick={() => updateValue(todo.id, editValue)}
          >
            Update
          </button>
        </>
      ) : (
        <>
          <p
            className={`break-words max-w-[300px] cursor-pointer ${
              todo.isCompleted ? "text-[#c5aeff] line-through" : "text-white"
            }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.task}
          </p>
          <div className="flex gap-2">
            <BiSolidEdit
              className="cursor-pointer"
              onClick={() => editTodo(todo.id)}
            />
            <BiSolidTrashAlt
              className="cursor-pointer"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
