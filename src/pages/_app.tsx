import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import Layout from "./layout";
import { AppProps } from "next/app";

const WalletConnectionProvider = dynamic(
  () => import("../context/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

const App = ({ Component, pageProps }: AppProps ) => {
  return (
    <WalletConnectionProvider>
      <Layout>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </WalletConnectionProvider>
  );
};

export default App;
