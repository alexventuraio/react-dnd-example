import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Task from '../Task/Task';

import './TaskList.css';

const TaskList = ({ tasks, columnId }) => {
  /*droppableSnapshot = {
    isDraggingOver: true,
    draggingOverWith: 'task-1',
  };*/

  return (
    <Droppable droppableId={columnId} type="task">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`px-3 ${
            snapshot.isDraggingOver ? 'bg-primary' : ''
          } task-list`}
        >
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
