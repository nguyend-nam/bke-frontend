import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import { Button } from "../components/Button/Button";

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const { user, logout } = useAuth();
  const { push } = useRouter();
  return (
    !isSSR && (
      <div>
        <Head>
          <title>BKEnglish</title>
          <meta name="description" content="BKEnglish" />
          <link rel="icon" href="/image/icons.jpg" />
        </Head>

        <main>
          <Layout>
            Logged in with {user?.email}
            <div style={{ width: 150 }}>
              <Button
                onClick={() => {
                  logout();
                  push("/login");
                }}
              >
                <span>Logout</span>
              </Button>
            </div>
          </Layout>
        </main>
      </div>
    )
  );
}
