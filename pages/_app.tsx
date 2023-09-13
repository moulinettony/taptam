import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app"; // Import AppProps from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
