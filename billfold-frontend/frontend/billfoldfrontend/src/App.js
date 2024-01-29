import DonationForm from './components/DonationForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FinancialPlanner from './components/FinancialPlanner';
import StockMarket from './components/StockMarket';
import RealEstate from './components/RealEstate';
import FixedDeposit from './components/FixedDeposit';
import MutualFunds from './components/MutualFunds';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Services from './components/Services';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <>
    <AuthProvider>
    <div className="App">
      <Elements stripe={stripePromise}>
      {/* <DonationForm/>
        <Navbar/>
        <Home/>
       <Footer/> */}
    
      <BrowserRouter>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path='/donate' element={<DonationForm/>} />
      <Route path='/finance-planner' element={<FinancialPlanner/>} /> 
      <Route path='/finance-planner/1' element={<FixedDeposit/>} />
      <Route path='/finance-planner/2' element={<StockMarket/>} /> 
      <Route path='/finance-planner/3' element={<RealEstate/>} />
      <Route path='/finance-planner/3' element={<MutualFunds/>} />  
      <Route path='/signin' element={<SignIn/>}></Route> 
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      
    </BrowserRouter> 
    </Elements>
    </div>
    </AuthProvider>
    </>
  );
}

export default App;
