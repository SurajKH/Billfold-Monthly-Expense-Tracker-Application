import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesCard = ({ id,title, description,imageUrl }) => {
    return (
        <React.Fragment>
        <div className="max-w-sm mx-auto my-4 p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow text-white bg-black">
        <div>
            <img src={imageUrl} alt='remote'/>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="black shadow-lg p-3 rounded-md">{description}</p>
        </div>
        </div>
        </React.Fragment>
    )
}

export default ServicesCard;
