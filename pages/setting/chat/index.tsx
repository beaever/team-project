import { useRouter } from 'next/router';
import React from 'react';
import MarginBottom from '../../../components/layout/margin-bottom';
import MarginTop from '../../../components/layout/margin-top';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';

const Chat = () => {
	const router = useRouter();
	const { mediaQuery } = useWidth();

	return (
		<>
			{mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
			<MarginTop margin={100} />
			<section>
				<h1>채팅</h1>
			</section>
			<MarginBottom margin={100} />
			{mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
		</>
	);
};

export default Chat;
