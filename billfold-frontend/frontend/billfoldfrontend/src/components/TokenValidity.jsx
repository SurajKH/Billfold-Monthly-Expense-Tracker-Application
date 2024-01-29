import { useEffect } from 'react';
import AuthService from './AuthService';

const TokenValidity = () => {
  useEffect(() => {
    const checkTokenExpiration = () => {
      if (!AuthService.isAuthenticated()) {
        // Redirect to the login page if the token is expired
        window.location.href = 'http://localhost:3000/signup';
      }
    };

    // Check for token expiration on component mount and on each update
    checkTokenExpiration();

    // Set up a timer to periodically check token expiration (every 60 seconds)
    const expirationCheckInterval = setInterval(() => {
      checkTokenExpiration();
    }, 60000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(expirationCheckInterval);
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return null; // You can customize the return value based on your needs
};

export default TokenValidity;
