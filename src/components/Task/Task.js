import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Draggable } from 'react-beautiful-dnd';

import './Task.css';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card shadow-sm rounded mb-2"
        >
          <Card.Body className="p-2">
            <Card.Title>
              <img
                src="https://trello-stickers.s3.amazonaws.com/546cc038bc4c3ac1b2bf77c4/124x124/c248e68548eba83f85d2d0e34987dd45/shipped2.png"
                className="rounded-circle float-right"
                alt="user avatar"
              />
              <a href="#" className="font-weight-light">
                {task.id}
              </a>
            </Card.Title>
            <Card.Text className="mt-4">{task.content}</Card.Text>
            <Badge variant="primary">v3.28</Badge>
          </Card.Body>
        </Card>
      )}
    </Draggable>
  );
};

export default Task;
