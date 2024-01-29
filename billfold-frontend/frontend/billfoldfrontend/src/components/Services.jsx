import React from 'react'
import { services } from '../utils/Services';
import ServicesCard from './ServicesCard';
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
  return (
    <React.Fragment>
    <div className=' bg-teal-100'>
    <Navbar/>
    <div className='pt-12 pb-12'>
    <p className="mx-auto w-1/2 text-2xl text-white bg-gray-800 p-4 rounded-lg">
      Services Offered 
    </p>
    </div>
    <div className="flex justify-center items-center ml-12 mr-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {services.map((item) => (
        <ServicesCard key={item.id} {...item} />
      ))}
    </div>
  </div>
  <Footer/>
  </div>
  </React.Fragment>
  )
}

export default Services;
