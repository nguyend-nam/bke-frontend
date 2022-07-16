import "../styles/globals.css";
import { useState, createContext } from "react";

export const AuthContext = createContext({
  isLogin: false,
  authenticate: (isLogin) => {
    isLogin = !isLogin;
  },
});

function MyApp({ Component, pageProps }) {
  const [isLogin, setIsLogin] = useState(false);
  const authenticate = () => {
    setIsLogin(!isLogin);
  };
  return (
    <AuthContext.Provider value={{ isLogin, authenticate }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
