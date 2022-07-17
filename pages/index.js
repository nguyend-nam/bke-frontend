import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth";

export default function Home() {
  const { logout } = useAuth();
  const { push } = useRouter();
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
          <button
            onClick={() => {
              logout();
              push("/login");
            }}
          >
            Logout
          </button>
        </Layout>
      </main>
    </div>
  );
}
