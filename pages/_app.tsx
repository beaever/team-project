import useWidth from '../hooks/useWitdh';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/init.scss';

function MyApp(Props: AppProps) {
  const { mediaQuery } = useWidth();

  return (
    <>
      <Props.Component {...Props.pageProps} />
    </>
  );
}

export default MyApp;
