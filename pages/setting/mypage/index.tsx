import { useRouter } from 'next/router';
import React from 'react';
import MarginBottom from '../../../components/layout/margin-bottom';
import MarginTop from '../../../components/layout/margin-top';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';

const Mypage = () => {
	const router = useRouter();
	const { mediaQuery } = useWidth();

	return (
		<>
			{mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
			<MarginTop margin={100} />
			<section className="mypage">
				<h1>마이페이지</h1>
			</section>
			{mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
			<MarginBottom margin={100} />
		</>
	);
};

export default Mypage;
