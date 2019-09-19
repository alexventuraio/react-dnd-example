import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import TaskList from '../TaskList/TaskList';

import './BoardColumn.css';

const BoardColumn = ({ column, tasks, index }) => {
  return (
    <Col className="column">
      <Card className="bg-light column-content">
        <Card.Body className="p-0">
          <h6 className="text-uppercase text-truncate pt-3 px-3">
            {column.title}
          </h6>
          <TaskList key={index} tasks={tasks} columnId={column.id} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BoardColumn;
