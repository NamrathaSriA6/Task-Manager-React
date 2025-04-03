import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, loading } = useContext(TaskContext);

  if (loading) return <div className="alert alert-info">Loading tasks...</div>;

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
