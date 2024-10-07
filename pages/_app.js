import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/globals.scss";
import "../styles/reset.scss";

import { SiteProvider } from "@lib/siteContext";
import { AuthProvider } from '@lib/Auth/AuthContext'; 

export default function MyApp({ Component, pageProps }) {
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
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <AuthProvider>
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
    </AuthProvider>
  );
}
