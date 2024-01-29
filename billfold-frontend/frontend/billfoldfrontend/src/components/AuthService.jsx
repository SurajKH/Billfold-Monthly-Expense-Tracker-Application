class AuthService {
        static isAuthenticated() {
        const token = localStorage.getItem('accessToken');
        const expirationTime = localStorage.getItem('tokenExpiration');
        
        return token && expirationTime && Date.now() < expirationTime;
        }
    
        static storeToken(accessToken, expirationTime) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('tokenExpiration', expirationTime);
        }
    
        static logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpiration');
        // You may want to perform additional cleanup or API calls for logout on the server
        }
    }
    
    export default AuthService;