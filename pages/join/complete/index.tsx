import { useRouter } from 'next/dist/client/router';
import MarginBottom from '../../../components/layout/margin-bottom';
import MarginTop from '../../../components/layout/margin-top';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';

const JoinComplete = () => {
	const router = useRouter();
	const { mediaQuery } = useWidth();
	const onClick = () => {
		router.push('/');
	};

	return (
		<>
			{mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
			<MarginTop margin={100} />
			<section className="JoinPage">
				<div className="Join_Container">
					<h2>회원가입 완료 페이지</h2>
					<button onClick={() => onClick()}>메인페이지로 이동하기</button>
				</div>
			</section>
			<MarginBottom margin={100} />
			{mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
		</>
	);
};

export default JoinComplete;
