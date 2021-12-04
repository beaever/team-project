import Pooter from "../layout/_Footer";
import MobileHeader from "../layout/_mobileHeader";
import mobileHeader from "../layout/_mobileHeader";
import PcHeader from "../layout/_pcHeader";
import '../styles/init.scss';




function MyApp({ Component, pageProps }) {
	return (
		<>
			<PcHeader />
			<MobileHeader />
			<Component {...pageProps} />
			<Pooter />
		</>
	);
	
}

export default MyApp;
