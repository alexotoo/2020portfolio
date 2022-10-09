import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/global.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=NEXT_PUBLIC_GA4_ID"
      ></Script>
      <Script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'NEXT_PUBLIC_GA4_ID');
      </Script>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
