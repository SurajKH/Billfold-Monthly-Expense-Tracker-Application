import React from 'react'
import { plans } from '../utils/Plans'
import Card from './Card';
const Cards = () => {

  const financialplans=plans; 

  return (
    <div>
      <div className="flex justify-center items-center ml-12 mr-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {financialplans.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Cards;
