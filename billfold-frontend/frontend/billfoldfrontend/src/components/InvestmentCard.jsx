import React from 'react';

const InvestmentCard = ({ id, title, description, imageUrl }) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow text-white bg-black">
      <div className="mb-4 text-white bg-black">
        <img className="w-full h-32 object-cover rounded-md" src={imageUrl} alt="remote" />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="black shadow-lg p-3 rounded-md">{description}</p>
      </div>
    </div>
  );
};

export default InvestmentCard;
