import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import API from '../../service/api';
import UserMemberInfoResponseDataModel from '../../service/api/user/model/user-member-info-response-data-model';
import Link from 'next/link';
import Input from '../../components/input/input';
import InputText from '../../components/input/inputText';
import MarginBottom from '../../components/layout/margin-bottom';
import Button from '../../components/input/button';

const Login = () => {
	const router = useRouter();
	// USESTATE
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onClickMove = (type: string) => {
		if (type === 'sign') {
			router.push('/join');
		}
	};

	return (
		<>
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
						onChange={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
					<MarginBottom margin={24} />
					<div style={{ marginTop: '27px' }} />
					<InputText
						label="비밀번호"
						type="password"
						side_type="type1"
						value={password}
						onChange={(e) => {
							setPassword(e.currentTarget.value);
						}}
					/>
					<MarginBottom margin={24} />
					<Button
						className="btn_login disabled"
						label="로그인"
						onClick={() => {}}
						marginBottom={10}
					/>

					<Button
						className="btn_login siginup"
						label=" 회원가입"
						onClick={() => {
							onClickMove('signup');
						}}
					/>

					<Link href="/find">
						<a className="to_find">이메일/비밀번호 찾기</a>
					</Link>

					<div className="sns_container">
						<div className="sns_title">
							<div className="line"></div>
							<div className="guide">소셜 로그인</div>
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
		</>
	);
};

export default Login;
