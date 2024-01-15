import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id,title, description, imageUrl }) => {
  const baseUrl = 'http://localhost:3000/finance-planner';

  return (
    <div className="max-w-sm mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <img className="w-full h-32 object-cover rounded-md" src={imageUrl} alt='remote' />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className='mx-auto w-1/2'>
          <Link to={`${baseUrl}/${id}`}>
            <button className="text-white bg-black p-6" style={{ border: "2px", borderRadius: "20px", margin: "12px" }}>Click me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
