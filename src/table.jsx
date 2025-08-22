import React, { useState } from 'react';
import TableRow from './tableRow';

let num  = 2;

function Table({ number }) {
  const [a, setNum] = useState(0);

  function nextTable(){
    num++;
    setNum(a + 1);
    }

  return (
    <div className="bg-white p-4">
        <button
            onClick={nextTable} 
            className="bg-indigo-600 text-white px-4 py-2 rounded mb-2"
        >
            Next
        </button>
        <div>
            <TableRow number={num} multiplier={1} />
            <TableRow number={num} multiplier={2} />
            <TableRow number={num} multiplier={3} />
            <TableRow number={num} multiplier={4} />
      </div>
    </div>
  );
}
export default Table;
