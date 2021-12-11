import Pooter from "../layout/_Footer";
import MobileHeader from "../layout/_mobileHeader";
import PcHeader from "../layout/_pcHeader";
import MobileFooter from "../layout/_mobileFooter";
import '../styles/init.scss';




function MyApp({ Component, pageProps }) {
	return (
		<>
			<PcHeader />
			<MobileHeader />
			<Component {...pageProps} />
			<Pooter />
			<MobileFooter />
		</>
	);
	
}

export default MyApp;
