import React from 'react';
import Task from '../Task/Task';

import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="px-3 task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
