import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
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
          <Card className="bg-light column-content">
            <Card.Body className="p-0">
              <h6
                {...provided.dragHandleProps}
                className="text-uppercase text-truncate pt-3 px-3"
              >
                {column.title}
              </h6>
              <TaskList key={index} tasks={tasks} columnId={column.id} />
            </Card.Body>
          </Card>
        </Col>
      )}
    </Draggable>
  );
};

export default BoardColumn;
