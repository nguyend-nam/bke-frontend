import "../styles/globals.css";
import { useState, createContext } from "react";
import { theme } from "../constants";

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
      <style jsx global>{`
        body {
          background: ${theme.colors.greenLime};
        }
      `}</style>
    </AuthContext.Provider>
  );
}

export default MyApp;
