import DonationForm from './components/DonationForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import {Router,BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import Contact from './components/Contact';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
      {/* <DonationForm/>
       <Navbar/>
       <Home/>
       <Footer/> */}
    

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>} />
      <Route
                path="/dashboard"
                element={<Dashboard />}
              />
      <Route path='/contact'
      element={<Contact/>}>

      </Route>   
      <Route path='/donate' element={<DonationForm/>}>
      </Route>     
      </Routes>
      
    </BrowserRouter> 
    </Elements>
    </div>
  );
}

export default App;
