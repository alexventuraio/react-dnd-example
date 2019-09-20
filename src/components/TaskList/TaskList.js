import React, { PureComponent } from 'react';
import Task from '../Task/Task';

import './TaskList.css';

let counter = 0;

class TaskList extends PureComponent {
  /*droppableSnapshot = {
    isDraggingOver: true,
    draggingOverWith: 'task-1',
  };*/

  render() {
    return this.props.tasks.map((task, index) => {
      counter++;
      console.count('Render Component');
      console.log('Counter: ', counter);
      return <Task key={task.id} task={task} index={index} />;
    });
  }
}

export default TaskList;
