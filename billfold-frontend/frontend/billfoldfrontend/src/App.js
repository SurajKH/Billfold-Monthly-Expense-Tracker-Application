import DonationForm from './components/DonationForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import Contact from './components/Contact';
import FinancialPlanner from './components/FinancialPlanner';
import StockMarket from './components/StockMarket';
import RealEstate from './components/RealEstate';
import FixedDeposit from './components/FixedDeposit';
import MutualFunds from './components/MutualFunds';

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
      <Route path='/finance-planner' element={<FinancialPlanner/>}></Route>  
      <Route path='/finance-planner/1' element={<FixedDeposit/>}></Route>
      <Route path='/finance-planner/2' element={<StockMarket/>}></Route>  
      <Route path='/finance-planner/3' element={<RealEstate/>}></Route>  
      <Route path='/finance-planner/3' element={<MutualFunds/>}></Route>  
      </Routes>
      
    </BrowserRouter> 
    </Elements>
    </div>
  );
}

export default App;
