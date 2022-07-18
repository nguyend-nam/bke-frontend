import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { useAuth } from "../../context/auth";

const menuItems = [];

export const Layout = ({ children, location }) => {
  const { user } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!user) {
      push(`/login`);
    }
  }, [user, push]);

  return <div>{user ? children : null}</div>;
};
