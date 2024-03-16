import React from 'react';

const Cook = () => {
  return (
    <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
          <td>
            <button className="btn bg-green-400 hover:text-black text-white">
              Preparing
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Cook;