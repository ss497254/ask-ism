import React from "react";
import "../styles/globals.css";
import { AuthProvider } from "../modules/auth/AuthProvider";
import { isServer } from "../lib/isServer";
import ReactModal from "react-modal";
// import { ErrorToastController } from "../modules/errors/ErrorToastController";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
// import { InvitedToJoinSpaceModal } from "../shared-components/InvitedToJoinSpaceModal";
// import { ConfirmModal } from "../shared-components/ConfirmModal";
import Head from "next/head";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  if (isServer) alert("done");
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  if (isServer) alert("done");
  NProgress.done();
});

ReactModal.setAppElement("#__next");

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
        <link rel="apple-touch-icon" href="/img/doge.png"></link>
        <link rel="apple-touch-startup-image" href="img/doge512.png" />
      </Head>
      <Component {...pageProps} />
      {/* <ErrorToastController /> */}
      {/* <InvitedToJoinSpaceModal /> */}
      {/* <ConfirmModal /> */}
    </AuthProvider>
  );
}

export default App;
