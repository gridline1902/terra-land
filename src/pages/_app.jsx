import dynamic from "next/dynamic";
import "./styles/globals.css";
import Layout from "./layout";

const WalletConnectionProvider = dynamic(
  () => import("./context/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

const App = ({ Component, pageProps }) => {
  return (
    <WalletConnectionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletConnectionProvider>
  );
};

export default App;
