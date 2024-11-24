import React from 'react';

const TotalCount = ({number, desription}) => {
  return (
    <div className="flex flex-col items-left justify-left  p-4 mt-7 max-w-sm mx-auto text-center border-r-2 border-gray-300">
      <h1 className="text-4xl text-left font-bold text-black">{number}</h1>
      <h4 className="text-lg font-medium text-left text-gray-700 mt-2">{desription}</h4>
    </div>
  );
};

export default TotalCount;
