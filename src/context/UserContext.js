import { useContext, createContext, setUser } from 'react';
import { getUser, signIn, signUp, signOut } from '../services/user.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  const login = async (email, password) => {
    const authenticatedUser = await signIn({ email, password });

    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  };

  const logout = () => {
    setUser({ email: null });
  };

  const userSignUp = async (email, password) => {
    const signedUpUser = await signUp({ email, password });
    await login(email, password);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, userSignUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
