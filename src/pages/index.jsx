import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useTransition } from "react";
import NavAppBar from "../app/components/NavBar";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      session && status === "authenticated" && router.push("./user");
    });
  }, [session, status]);

  useEffect(() => {
    startTransition(() => {
      session && console.log(session);
    });
  }, [session]);

  return (
    <>
      <Head>
        <title>Terra Vault</title>
        <meta
          name="description"
          content="Register your land on the blockchain"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!isPending && (
          <>
            {!session ? (
              <>
                <NavAppBar />
              </>
            ) : (
              <Typography variant="h6">Loading...</Typography>
            )}
          </>
        )}
      </main>
    </>
  );
}
