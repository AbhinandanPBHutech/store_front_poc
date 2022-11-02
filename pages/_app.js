import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../componentss/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
