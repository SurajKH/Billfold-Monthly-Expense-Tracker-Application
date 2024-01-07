import React,{useState} from 'react';

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
       <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800" style={{backgroundColor:"bg-black",backgroundSize:"cover",overflow:"hidden"}}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="https://flowbite.com" className="flex items-center">
        <span className="flex items-center text-xl font-semibold whitespace-nowrap text-teal-300">
          Billfold :
          {/* <img
            src='https://img.freepik.com/free-vector/store-staff-check-number-products-that-must-be-delivered-customers-during-day_1150-51079.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais'
            alt='remoteimage'
            className='p-1 ml-5'
            width={"70px"}
          /> */}

           <span className='ml-12'> Your Bills with Essential Stats.</span>
        </span>
      </a>


        <div className="lg:hidden">
          {/* Toggle button for small screens */}
          <button onClick={handleMobileMenuToggle} className="text-teal-300 focus:outline-none">
            ☰
          </button>
        </div>
        </div>
        {/* <h3 className='flex-left text-teal-300'> Your Bills with Essential Stats.</h3> */}

        <div id="mobileMenu" className={`lg:flex flex-grow items-center lg:justify-end ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <ul className="lg:flex sm:w-full lg:w-1/2 mx-auto">
            <hr/>
            <li className='p-5'>
              <a href='http://localhost:3000' className="text-teal-300">Home</a>
            </li>
            <hr/>
            <li className='p-5' >
              <a href='http://localhost:3000/dashboard' className="text-teal-300" >Dashboard</a>
            </li>
            <hr/>
            <li className='p-5' >
              <a href='http://localhost:3000/services' className="text-teal-300" >Services</a>
            </li>
            <hr/>
            <li className='p-5' >
              <a href='http://localhost:3000/contact-us' className="text-teal-300" >Contact</a>
            </li>
            <hr/>
            <li className='p-5' >
              <a href='http://localhost:3000/donate' className="text-teal-300" >Donate</a>
            </li>
            {/* <li className='p-1'>
            <a href='http://localhost:3000/donate' className='text-white' style={{ display: 'flex', alignItems: 'center',alignContent:"center" }}>
              <img src="https://www.wildapricot.com/wp-content/uploads/2023/02/donation-button.png" alt='remote' style={{width:"70px",
              height:"70px",marginLeft: '5px',border:"2px solid white",borderRadius:"25px" }} />
            </a>
           </li> */}
          </ul>
        </div>
    </nav>
   
</header>
  )
}

export default Navbar;
