import { AppProps } from "next/app";
import "../style.scss";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <header>
      <nav>
        <Link href="/">
          <a title="Home">Home</a>
        </Link>
        <Link href="/about">
          <a title="Sobre">Sobre</a>
        </Link>
      </nav>
    </header>
    <Component {...pageProps} />
  </div>;
}

export default MyApp;
