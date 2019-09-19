import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { DragDropContext } from 'react-beautiful-dnd';

import BoardColumn from '../BoardColumn/BoardColumn';

import './App.css';

class App extends Component {
  state = this.props.data;

  onDragEnd = result => {
    /* result = {
      draggableId: 'task-1',
      type: 'TYPE',
      reason: 'DROP',
      source: {
        droppableId: 'column-1',
        inde: 0,
      },
      destination: {
        droppableId: 'column-1',
        index: 1,
      },
    }; */
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startCol = this.state.columns[source.droppableId];
    const finishCol = this.state.columns[destination.droppableId];

    // Moving items within the same BoardColumn
    if (startCol === finishCol) {
      const newTaskIds = Array.from(startCol.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startCol,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one BoardColumn to another
    const startTaskIds = Array.from(startCol.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startCol,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishCol.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishCol,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container fluid>
          <h1 className="text-white font-weight-light">Kanban Board</h1>
          <Row className="flex-nowrap scrollable">
            {this.state.columnOrder.map((columnId, index) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(
                taskId => this.state.tasks[taskId],
              );
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
}

export default App;
