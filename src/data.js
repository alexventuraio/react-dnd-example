const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook diner' },
    'task-5': { id: 'task-5', content: 'Submit a Pull Request up to date.' },
    'task-6': { id: 'task-6', content: 'Submit a Pull Request up to date.' },
    'task-7': { id: 'task-7', content: 'Submit a Pull Request up to date.' },
    'task-8': { id: 'task-8', content: 'Submit a Pull Request up to date.' },
    'task-9': { id: 'task-9', content: 'Submit a Pull Request up to date.' },
    'task-10': { id: 'task-10', content: 'Submit a Pull Request up to date.' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: [
        'task-1',
        'task-2',
        'task-3',
        'task-4',
        'task-5',
        'task-6',
        'task-7',
        'task-8',
        'task-9',
        'task-10',
      ],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'Deploy',
      taskIds: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'POA',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
};

export default initialData;
