import React from 'react';
import Column from '../Column/Column';

import './App.css';

function App({ data }) {
  return (
    <div className="container-fluid">
      <h1 className="font-weight-light">Kanban Board</h1>
      {data.columnOrder.map(columnId => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks}></Column>;
      })}
    </div>
  );
}

export default App;
