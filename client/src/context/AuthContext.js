import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// Configure axios defaults
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
// Don't use withCredentials for '*' origin CORS
axios.defaults.withCredentials = false;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Load user from localStorage on initial load
  useEffect(() => {
    const loadUserFromLocalStorage = async () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        if (token && userData) {
          setUser(JSON.parse(userData));
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserFromLocalStorage();
  }, []);

  // Register user
  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Attempting to register user:', { name, email });
      
      // Create a simple fetch request instead of axios
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
      });
      
      if (!response.ok) {
        throw new Error(`Registration failed: ${response.status} ${response.statusText}`);
      }
      
      const res = { data: await response.json() };
      
      const { token, user } = res.data;
      
      // Set token in localStorage and axios headers
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(user);
      router.push('/dashboard');
      
      return res.data;
    } catch (error) {
      setError(
        error.response?.data?.message || 
        'Registration failed. Please try again.'
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Attempting to login user:', { email });
      
      // Create a simple fetch request instead of axios
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        throw new Error(`Login failed: ${response.status} ${response.statusText}`);
      }
      
      const res = { data: await response.json() };
      
      const { token, user } = res.data;
      
      // Set token in localStorage and axios headers
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(user);
      router.push('/dashboard');
      
      return res.data;
    } catch (error) {
      setError(
        error.response?.data?.message || 
        'Login failed. Please check your credentials.'
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    router.push('/login');
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        register,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
