import React from 'react';
import Column from '../Column/Column';

import './App.css';

function App({ data }) {
  return (
    <div className="container-fluid">
      <h1 className="text-white font-weight-light">Kanban Board</h1>
      <div className="row flex-nowrap scrollable">
        {data.columnOrder.map((columnId, index) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
