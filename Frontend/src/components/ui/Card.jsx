import React from 'react';

const Card = ({ children }) => {
  return (
    <>
      <div className="border rounded-lg shadow p-5 bg-white">{children}</div>
    </>
  );
};

export default Card;
