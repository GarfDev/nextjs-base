import { Provider } from "react-redux";
import { wrapper } from "../store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // Keep in mind that this will be called twice on server, one for page and second for error page
  ctx.store.dispatch({ type: "APP", payload: "was set in _app" });
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      // Some custom thing for all pages
      appProp: ctx.pathname,
    },
  };
};

export default wrapper.withRedux(MyApp);
