import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { DragDropContext } from 'react-beautiful-dnd';

import BoardColumn from '../BoardColumn/BoardColumn';

import './App.css';

function App({ data }) {
  const onDragEnd = () => {
    // TODO
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container fluid>
        <h1 className="text-white font-weight-light">Kanban Board</h1>
        <Row className="flex-nowrap scrollable">
          {data.columnOrder.map((columnId, index) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
            return (
              <BoardColumn
                key={column.id}
                column={column}
                tasks={tasks}
                index={index}
              />
            );
          })}
        </Row>
      </Container>
    </DragDropContext>
  );
}

export default App;
