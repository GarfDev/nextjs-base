import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "react-redux";
import { ThemeProvider } from "styled-components";
import { wrapper } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { initTheme } from "store/core/theming";
import { initCart } from "store/core/cart/actions";
import BaseStyle, { currentThemeSelector } from "global/theming";
// Import Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import 'antd/dist/antd.css';
// Import Components
import { NavigationBar } from "global/components";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const store = useStore((state) => state);
  const currentTheme = useSelector(currentThemeSelector);

  useEffect(() => {
    dispatch(initTheme());
    dispatch(initCart());
  }, []);

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
      <ThemeProvider theme={currentTheme}>
        <NavigationBar {...pageProps} />
        <Component {...pageProps} />
        <BaseStyle />
      </ThemeProvider>
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
