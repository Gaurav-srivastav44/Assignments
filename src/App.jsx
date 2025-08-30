import React, { useState, useRef } from "react";
import Refresh from "./Refresh";
import TaskList from "./TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Gaurav Do the PYQs", completed: false },
    { id: 2, text: "Gaurav Complete MERN", completed: false },
  ]);
  const [add, setAdd] = useState(false);
  const [newTask, setNewTask] = useState("");

  const nextId = useRef(3);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (!newTask) return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: nextId.current++, text: newTask, completed: false },
    ]);
    setNewTask("");
    setAdd(false);
  };

  const handleRefresh = () => {
    const defaultTasks = [
      { id: 1, text: "Gaurav Do the PYQs", completed: false },
      { id: 2, text: "Gaurav Complete MERN", completed: false },
    ];
    setTasks(defaultTasks);
    nextId.current = defaultTasks.length + 1;
  };

  return (
    <div>
      <div className="p-4 border-b pl-[160px] flex justify-between items-center">
        <h1 className="text-xl font-semibold py-1">XTodo</h1>
        <Refresh onRefresh={handleRefresh} />
      </div>
      <div className="pl-[160px]">
        <h1 className="text-3xl font-bold py-9">Things to get done</h1>
        <p className="text-lg font-semibold pb-4">Things to do</p>
        <TaskList tasks={tasks} toggleTask={toggleTask} completed={false} />
        {!add ? (
          <button
            onClick={() => setAdd(true)}
            className="mt-4 bg-yellow-500 text-white rounded-full px-4 py-2 flex items-center"
          >
            <span className="text-xl pr-2">+</span> Add a todo
          </button>
        ) : (
          <div className="mt-4 p-6 border rounded-xl shadow-sm w-[400px] bg-white">
            <p className="font-semibold text-lg pb-3">Create a todo</p>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Write your task"
              className="border px-3 py-2 rounded w-full mb-3"
            />
            <div className="flex gap-3">
              <button
                onClick={addTask}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setAdd(false);
                  setNewTask("");
                }}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <p className="text-lg font-semibold py-4">Things done</p>
        <TaskList tasks={tasks} toggleTask={toggleTask} completed={true} />
      </div>
    </div>
  );
}
