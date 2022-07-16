import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../pages/_app";

const menuItems = [];

export const Layout = ({ children, location }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const contextValue = useContext(AuthContext);
  const isLogin = contextValue.isLogin;
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push(`/login`);
    }
  }, [isLogin, push, location]);

  if (!isLogin) {
    return null;
  }

  return <div>{children}</div>;
};
