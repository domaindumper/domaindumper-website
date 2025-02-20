import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/globals.scss";
import "../styles/reset.scss";

import { SiteProvider, defaultSiteInfo } from '@/context/SiteContext';
import { AuthProvider } from '@/context/AuthContext'; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log(
      "%c If you're playing Mario with our data, we've got a free warp pipe for you! Skip the scraping and head over to our free API at: https://statistics.domaindumper.com/",
      "color: #FF0000; font-weight: bold; font-size: 14px;"
    );
    window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
    const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasNavbarDefault");
    Aos.init({
      once: true,
      duration: 700,
      offset: 60,
      easing: "ease-in-out-cubic",
    });

    const handleStart = (url) => {
      NProgress.start();
      bsOffcanvas.hide();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  const getLayout = Component.getLayout || ((page) => page);
  const siteInfo = pageProps.siteInfo || defaultSiteInfo;

  return (
    <SiteProvider initialSiteInfo={siteInfo}>
      <AuthProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>DomainDumper</title>
          <meta name="description" content="DomainDumper - Domain Management Solution" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </SiteProvider>
  );
}

export default MyApp;
