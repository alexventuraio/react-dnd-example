import React from 'react';
import TaskList from '../TaskList/TaskList';

import './Column.css';

const Column = ({ column, tasks, index }) => {
  return (
    <div className="col column">
      <div className="card bg-light column-content">
        <div className="card-body p-0">
          <h6 className="card-title text-uppercase text-truncate pt-3 px-3">
            {column.title}
          </h6>
          <TaskList key={index} tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Column;
