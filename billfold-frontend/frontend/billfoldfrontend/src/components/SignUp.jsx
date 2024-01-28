import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';


const SignUp = () => {

        const navigate = useNavigate("http://localhost:3000");
        const [credentials, setCredentials] = useState({ email: '', password: '',firstname  : '', lastname : ''});

        const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
        
            const response = await axios.post('http://localhost:8080/api/v1/signup', credentials);
            
            console.log('User created successful.', response);

            const accessToken = response.data.token;
            console.log("Access Token: ",accessToken);
            
        document.cookie = `accessToken=${accessToken}; path=/; secure; HttpOnly`;
        localStorage.setItem('token',accessToken);
        navigate("/signin");
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    };

  return (
        <React.Fragment>
        <Navbar/>
        <div>
        <section class="bg-gray-50 dark:bg-gray-900">
        <div  style={{backgroundColor:"#cccbff",backgroundSize:"cover",overflow:"hidden"}} class="flex flex-col items-center justify-center px-8 py-8 md:h-screen">

        {/* <Marquee><p className='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2.5 py-2.5 shadow-md mt-0.5 mb-7'><h2>Note: Access to the Website is restricted to the Admins, contact Admin for further assistance. </h2></p></Marquee> */}
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign up to create a new Account.
                    </h1>
                    <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                        <h2> <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        </h2>
                            <input  type="text" name="firstname" value={credentials.firstname} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2.5 py-2.5" placeholder="First Name" required />
                        </div>
                        <div>
                        <h2> <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        </h2>
                            <input  type="text" name="lastname" value={credentials.lastname} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2.5 py-2.5" placeholder="Last Name" required />
                        </div>
                        <div>
                        <h2> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                        </h2>
                            <input  type="email" name="email" value={credentials.email} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2.5 py-2.5" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white px-1 py-1" >Password</label>
                            <input type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full px-2.5 py-2.5" 
                    placeholder="Enter your password."

                    />
                        </div>
                        <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
                        bg-color-black px-5 py-5
                        " style={{backgroundColor:"black",color:"white"}}
                        >Sign Up</button>

                        <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
                                                bg-color-black px-5 py-5
                                                " style={{backgroundColor:"black",color:"white"}}
                                                onClick={(event)=>{
                                                    event.preventDefault();
                                                    navigate('/signin');
                                                }}
                                                >Existing User? Click to SignIn</button>
                    </form>
                </div>
            </div>
            
        </div>

    </section>
    <Footer/>
        </div>
        </React.Fragment>
    )
}

export default SignUp;