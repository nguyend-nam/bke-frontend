import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import { AuthContext } from "./_app";
import { useContext } from "react";

export default function Home() {
  const contextValue = useContext(AuthContext);
  const logIn = (isLogin) => contextValue.authenticate(isLogin);
  return (
    <div>
      <Head>
        <title>BKEnglish</title>
        <meta name="description" content="BKEnglish" />
        <link rel="icon" href="/image/icons.jpg" />
      </Head>

      <main>
        <Layout location="/">
          Logged in
          <button onClick={() => logIn(false)}>Logout</button>
        </Layout>
      </main>
    </div>
  );
}
