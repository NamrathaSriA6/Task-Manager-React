import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
  const { toggleComplete, deleteTask } = useContext(TaskContext);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="me-2"
        />
        <span className={task.completed ? 'completed' : ''}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;