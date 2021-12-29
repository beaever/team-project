import Footer from '../layout/_Footer';
import MobileHeader from '../layout/_mobileHeader';
import PcHeader from '../layout/_pcHeader';
import MobileFooter from '../layout/_mobileFooter';
import '../styles/init.scss';
import useWidth from '../hooks/useWitdh';
import { AppProps } from 'next/dist/shared/lib/router/router';

function MyApp(Props: AppProps) {
	const { mediaQuery } = useWidth();

	return (
		<>
			<Props.Component {...Props.pageProps} />
		</>
	);
}

export default MyApp;
