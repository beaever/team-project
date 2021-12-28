import Footer from '../layout/_Footer';
import MobileHeader from '../layout/_mobileHeader';
import PcHeader from '../layout/_pcHeader';
import MobileFooter from '../layout/_mobileFooter';
import '../styles/init.scss';
import useWidth from '../hooks/useWitdh';

function MyApp({ Component, pageProps }) {
	const { mediaQuery } = useWidth();

	return (
		<>
			{mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
			<Component {...pageProps} />
			{mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
		</>
	);
}

export default MyApp;
