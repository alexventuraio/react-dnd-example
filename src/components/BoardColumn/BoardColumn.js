import React from 'react';
import Col from 'react-bootstrap/Col';
import { Draggable } from 'react-beautiful-dnd';

import TaskList from '../TaskList/TaskList';

import './BoardColumn.css';

const BoardColumn = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Col
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="column"
        >
          <div className="bg-light rounded column-content">
            <h6
              {...provided.dragHandleProps}
              className="text-uppercase text-truncate pt-3 px-3"
            >
              {column.title}
            </h6>
            <TaskList key={index} tasks={tasks} columnId={column.id} />
          </div>
        </Col>
      )}
    </Draggable>
  );
};

export default BoardColumn;
