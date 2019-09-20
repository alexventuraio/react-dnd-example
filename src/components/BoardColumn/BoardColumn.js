import React from 'react';
import Col from 'react-bootstrap/Col';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import TaskList from '../TaskList/TaskList';

import './BoardColumn.css';

const BoardColumn = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
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
            <Droppable droppableId={column.id} type="task">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`px-3 ${
                    snapshot.isDraggingOver ? 'bg-primary' : ''
                  } task-list`}
                >
                  <TaskList tasks={tasks} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </Col>
      )}
    </Draggable>
  );
};

export default BoardColumn;
