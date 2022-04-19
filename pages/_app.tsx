import GlobalStyle from '../styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { wrapper } from '../util/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
