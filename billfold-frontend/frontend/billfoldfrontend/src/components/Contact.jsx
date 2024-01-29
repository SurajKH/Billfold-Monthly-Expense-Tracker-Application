// ContactForm.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your Firebase Firestore configuration here
    const db = firebase.firestore();

    try {
      // Add the form data to the "contacts" collection
      await db.collection('contacts').add(formData);

      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      toast.success('Thank you,Contact Form has been submitted Successfully.', {
        position: 'top-right',
        autoClose: 5000, // Close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error submitting the form please enter valid details.', error.message);
      toast.error('Error submitting message. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className='bg-teal-100'>
    <Navbar/>
    <p className="mx-auto w-1/2 mt-12 text-2xl text-white bg-gray-800 p-4 rounded-lg">
        Feel Free to Contact us regarding any queries related to the application.
      </p>
      <div className="w-1/2 mx-auto mt-12 flex items-center justify-center mb-12 ">
        <div className="max-w-xl mx-auto p-8 border border-gray-300 rounded-md shadow-lg text-white bg-gray-800">
        <img  src="https://png.pngtree.com/thumb_back/fw800/background/20230924/pngtree-old-phone-hanging-on-string-with-metal-attachment-image_13336094.jpg" alt='re'/>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                width="100px"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 text-black"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
