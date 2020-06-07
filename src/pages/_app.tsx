import { AppProps } from "next/app";
import "../style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Component {...pageProps} />
  </div>;
}

export default MyApp;
