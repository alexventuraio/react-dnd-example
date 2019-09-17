import React from 'react';

const Column = ({ column }) => {
  return (
    <div className="col-sm-6 col-md-4 col-xl-3">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title text-uppercase text-truncate py-2">
            {column.title}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Column;
