import React from 'react';

function TableRow({ number, multiplier }) {
  return (
    <p className="text-2xl text-blue-700 my-2">
      {number} x {multiplier} = {number * multiplier}
    </p>
  );
}

export default TableRow;
