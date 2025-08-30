import React from "react";

export default function TaskList({ tasks, toggleTask, completed }) {
  return (
    <div className="space-y-2">
      {tasks
        .filter((task) => task.completed === completed)
        .map((task) => (
          <label key={task.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className={`w-5 h-5 border-2 border-gray-400 rounded ${
                completed ? "bg-yellow-500" : ""
              }`}
            />
            <span className={completed ? "font-md" : ""}>{task.text}</span>
          </label>
        ))}
    </div>
  );
}
