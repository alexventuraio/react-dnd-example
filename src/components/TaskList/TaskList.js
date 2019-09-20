import React, { memo } from 'react';
import Task from '../Task/Task';

import './TaskList.css';

const TaskList = memo(({ tasks, columnId }) => {
  /*droppableSnapshot = {
    isDraggingOver: true,
    draggingOverWith: 'task-1',
  };*/

  return tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ));
});

export default TaskList;
