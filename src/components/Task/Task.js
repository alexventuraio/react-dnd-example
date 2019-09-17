import React from 'react';

import './Task.css';

const Task = ({ task }) => {
  return (
    <div className="card shadow-sm rounded mb-2">
      <div className="card-body p-2">
        <div className="card-title">
          <img
            src="https://trello-stickers.s3.amazonaws.com/546cc038bc4c3ac1b2bf77c4/124x124/c248e68548eba83f85d2d0e34987dd45/shipped2.png"
            className="rounded-circle float-right"
            alt=""
          />
          <a href="#" className="font-weight-light">
            {task.id}
          </a>
        </div>
        <p className="card-text mt-4">{task.content}</p>
        <span className="badge badge-primary">v3.28</span>
      </div>
    </div>
  );
};

export default Task;
