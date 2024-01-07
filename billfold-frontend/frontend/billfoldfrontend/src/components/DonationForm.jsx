// DonationForm.js
import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

const DonationForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [currency,setCurrency]=useState('INR');
  const [loading, setLoading] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [payment,paymentStatus]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || loading) {
      return;
    }

    try {
      setLoading(true);

      // Create a PaymentIntent on the server
      const result = await axios.post('http://localhost:8081/api/donations/payment-intent', { amount });

      // Set the PaymentIntent in state for display
      console.log("Data from Backend: ",result);
      setPaymentIntent(result.data);

      if(result!==null && result.data!==null )
      {
       paymentStatus(true);
      }

      // You can also add additional checks or logic here before confirming the payment
    } catch (error) {
      console.error('Error creating PaymentIntent:', error);
      alert('Error creating PaymentIntent. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async () => {
    if (!stripe || !elements || !paymentIntent || loading) {
      return;
    }

    try {
      setLoading(true);

      // Confirm the PaymentIntent with the card details
      const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name },
        },
      });

      if (result.error) {
        console.error(result.error.message);
        alert('Error confirming payment. Please check your card details and try again.');
      } else {
        alert('Donation successful!');
        // You can perform additional actions after a successful donation
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
      alert('Error confirming payment. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md  bg-teal-200 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600 text-sm font-medium mb-2">Amount</label>
          <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required />
        </div>

        {paymentIntent && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
            <p>Amount: {amount}</p>
            <p>Currency: {currency}</p>
            {/* Add more details as needed */}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="card-element" className="block text-gray-600 text-sm font-medium mb-2">Card Details</label>
          <CardElement id="card-element" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
        </div>

        <button type="submit" className={`bg-blue-500 text-white py-2 px-4 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 focus:ring focus:border-blue-300'}`}>
          {loading ? 'Loading...' : 'Get Payment Details'}
        </button>
        {paymentIntent && (
          <button type="button" onClick={handleConfirmPayment} className={`bg-green-500 text-white py-2 px-4 rounded-md ml-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 focus:ring focus:border-green-300'}`}>
            {loading ? 'Confirming...' : 'Confirm Donation'}
          </button>
        )}
      </form>
    </div>
   <Footer/>
    </>
    
  );
};

export default DonationForm;
