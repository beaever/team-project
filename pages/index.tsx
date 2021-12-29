import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemSlider from '../layout/_itemSlider';
import Slider from '../layout/_slider';
import ItemList from '../layout/_itemList';
import useWidth from '../hooks/useWitdh';
import MarginTop from '../components/layout/margin-top';
import MobileHeader from '../layout/_mobileHeader';
import PcHeader from '../layout/_pcHeader';
import MarginBottom from '../components/layout/margin-bottom';
import MobileFooter from '../layout/_mobileFooter';
import Footer from '../layout/_Footer';

const Div = styled.div`
	width: 100%;
	height: 100vh;
	background-color: gray;
	top: 13px;
	position: relative;
`;

export default function Home() {
	// 기본적으로 선언할 내장함수
	const router = useRouter();
	// useState
	const [state, setState] = useState<any>(''); // 임시 예제
	const { mediaQuery } = useWidth();
	// Function

	// useEffect
	useEffect(() => {}, []);

	// RETURN
	return (
		<>
			{mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
			<MarginTop margin={100} />
			<section className="mainPage">
				<div className="mainContainer">
					<Slider />
					<ItemSlider />
					<ItemList />
				</div>
			</section>
			<MarginBottom margin={100} />
			{mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
		</>
	);
}
