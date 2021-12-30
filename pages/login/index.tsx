import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import InputText from '../../components/input/inputText';
import MarginBottom from '../../components/layout/margin-bottom';
import Button from '../../components/input/button';
import MobileHeader from '../../layout/_mobileHeader';
import PcHeader from '../../layout/_pcHeader';
import useWidth from '../../hooks/useWitdh';
import MobileFooter from '../../layout/_mobileFooter';
import Footer from '../../layout/_Footer';
import MarginTop from '../../components/layout/margin-top';
import useLoginState from '../../hooks/useLoginState';

const Login = () => {
	const router = useRouter();
	const { mediaQuery } = useWidth();
	const { loginForm, setLoginForm } = useLoginState('load-login');
	// USESTATE
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onClickMove = (type: string) => {
		if (type === 'signup') {
			router.push('/join');
		}
	};

	const onClickLogin = () => {
		setLoginForm({
			['login']: true,
		});
	};

	useEffect(() => {
		console.log(email);
	}, [email]);

	useEffect(() => {
		localStorage.clear();
	}, []);

	useEffect(() => {}, []);

	return (
		<>
			{mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
			<MarginTop margin={100} />
			<section id="login">
				<div className="container">
					<div id="login-title">
						<h1>로그인</h1>
					</div>

					<InputText
						label="이메일"
						type="text"
						side_type="type1"
						value={email}
						placeholder="goingbuying@gmail.com"
						onChange={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
					<MarginBottom margin={20} />
					<InputText
						label="비밀번호"
						type="password"
						side_type="type1"
						value={password}
						placeholder="*****"
						onChange={(e) => {
							setPassword(e.currentTarget.value);
						}}
					/>
					<MarginBottom margin={30} />
					<Button
						className="btn_login disabled"
						label="로그인"
						onClick={onClickLogin}
						marginBottom={10}
					/>

					<Button
						className="btn_login siginup"
						label=" 회원가입"
						onClick={() => onClickMove('signup')}
					/>

					<Link href="/find">
						<a className="to_find">이메일/비밀번호 찾기</a>
					</Link>

					<div className="sns_container">
						<div className="sns_title">
							<div className="line"></div>
							<div className="guide">
								<span>SNS 로그인 / 회원가입</span>
							</div>
						</div>
						<MarginBottom margin={22} />
						<div className="sns_wrap">
							<Button
								className="kakao"
								label="카카오"
								img={true}
								src="icon/kakao.svg"
								onClick={() => {}}
								marginBottom={10}
							/>

							<Button
								className="naver"
								label=" 네이버"
								img={true}
								src="icon/naver.svg"
								onClick={() => {}}
							/>
						</div>
					</div>
				</div>
			</section>
			{mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
		</>
	);
};

export default Login;
