import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { useAuth } from "../../context/auth";

const menuItems = [];

export const Layout = ({ children, location }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const { user, login, signup } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!user) {
      push(`/login`);
    }
  }, [user, push]);

  return <div>{user ? children : null}</div>;
};
