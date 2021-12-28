import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import API from '../../service/api';
import UserMemberInfoResponseDataModel from '../../service/api/user/model/user-member-info-response-data-model';
import Link from 'next/link';
import Input from '../../components/input/input';
import InputText from '../../components/input/inputText';

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
					<Link href="/">
						<a className="logo">
							<img
								src={'??'}
								alt="로고 이미지"
								style={{ marginBottom: 60, height: 44 }}
							/>
						</a>
					</Link>

					<InputText
						label="이메일"
						type="text"
						side_type="type1"
						value={email}
						onChange={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
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

					<div style={{ marginTop: '40px' }} />
					<button
						onClick={() => alert('로그인 버튼')}
						className="btn m_w_100"
						style={{ marginBottom: 12 }}
					>
						로그인
					</button>

					<button
						className="btn m_w_100 line_btn"
						onClick={() => {
							onClickMove('sign');
						}}
					>
						회원가입
					</button>

					<Link href="/find">
						<a className="to_find">이메일/비밀번호 찾기</a>
					</Link>

					<div className="sns_title">
						<div className="line"></div>
						<div className="guide">소셜 로그인</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
