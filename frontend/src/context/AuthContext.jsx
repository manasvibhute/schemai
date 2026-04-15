// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check if user is logged in on mount
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const checkAuth = () => {
//     try {
//       const storedUser = localStorage.getItem('user');
//       const token = localStorage.getItem('authToken');
      
//       if (storedUser && token) {
//         setUser(JSON.parse(storedUser));
//         setIsAuthenticated(true);
//       }
//     } catch (error) {
//       console.error('Auth check error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       // TODO: Replace with actual API call
//       // const response = await api.post('/auth/login', { email, password });
      
//       // Mock login
//       const mockUser = {
//         id: '1',
//         name: 'John Doe',
//         email: email,
//       };
      
//       const mockToken = 'mock-jwt-token-' + Date.now();
      
//       localStorage.setItem('user', JSON.stringify(mockUser));
//       localStorage.setItem('authToken', mockToken);
      
//       setUser(mockUser);
//       setIsAuthenticated(true);
      
//       return { success: true, user: mockUser };
//     } catch (error) {
//       console.error('Login error:', error);
//       return { success: false, error: error.message };
//     }
//   };

//   const signup = async (name, email, password) => {
//     try {
//       // TODO: Replace with actual API call
//       // const response = await api.post('/auth/signup', { name, email, password });
      
//       // Mock signup
//       const mockUser = {
//         id: Date.now().toString(),
//         name: name,
//         email: email,
//       };
      
//       const mockToken = 'mock-jwt-token-' + Date.now();
      
//       localStorage.setItem('user', JSON.stringify(mockUser));
//       localStorage.setItem('authToken', mockToken);
      
//       setUser(mockUser);
//       setIsAuthenticated(true);
      
//       return { success: true, user: mockUser };
//     } catch (error) {
//       console.error('Signup error:', error);
//       return { success: false, error: error.message };
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('authToken');
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   const updateUser = (updatedData) => {
//     const updatedUser = { ...user, ...updatedData };
//     setUser(updatedUser);
//     localStorage.setItem('user', JSON.stringify(updatedUser));
//   };

//   const value = {
//     user,
//     loading,
//     isAuthenticated,
//     login,
//     signup,
//     logout,
//     updateUser,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




















import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('authToken');
      
      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      // TODO: Replace with actual API call
      // const response = await api.post('/auth/login', { email, password });
      
      // Mock login
      const mockUser = {
        id: '1',
        name: 'John Doe',
        email: email,
      };
      
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('authToken', mockToken);
      
      setUser(mockUser);
      setIsAuthenticated(true);
      
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const signup = async (name, email, password) => {
    try {
      // TODO: Replace with actual API call
      // const response = await api.post('/auth/signup', { name, email, password });
      
      // Mock signup
      const mockUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
      };
      
      const mockToken = 'mock-jwt-token-' + Date.now();
      
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('authToken', mockToken);
      
      setUser(mockUser);
      setIsAuthenticated(true);
      
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};