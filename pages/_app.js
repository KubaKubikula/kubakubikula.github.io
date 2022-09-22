import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Cookies from "../components/Cookies";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState();
  const router = useRouter();

  useEffect(() => {
    setState(() => {
      const useCookies = localStorage.getItem("useCookies");
      return {
        actionTaken: useCookies ? true : false,
        useCookies: JSON.parse(useCookies),
      };
    });

    ReactGA.initialize("G-596XF81F41");
  }, []);

  useEffect(() => {
    if (state && state.actionTaken && state.useCookies) {
      ReactGA.send({ hitType: "pageview", page: router.pathname });
    }
  }, [router.pathname]);

  return (
    <Layout>
      <Component {...pageProps} />
      {state && !state.actionTaken && <Cookies setState={setState} />}
    </Layout>
  );
}

export default MyApp;
