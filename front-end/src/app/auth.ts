export const isAuthenticated = () => {
    return typeof window !== 'undefined' && localStorage.getItem('token');
  };
  
  export const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  };
  