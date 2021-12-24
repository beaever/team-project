import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import API from '../../service/api';
import UserMemberInfoResponseDataModel from '../../service/api/user/model/user-member-info-response-data-model';
import Link from 'next/link';
import Input from '../../components/input/input';

const Login = () => {
	const router = useRouter();
	// USESTATE
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	// const getMemberInfo = () => {
	// 	API.user
	// 		.memberInfo({ token: 'token' })
	// 		.then((res) => {
	// 			const data = res.data as UserMemberInfoResponseDataModel;
	// 			if (data.code === 200) {
	// 				console.log(data.data);
	// 				router.push('/');
	// 			} else {
	// 				alert(data.msg);
	// 			}
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// };

	// useEffect(() => {
	// 	getMemberInfo();
	// }, []);

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

					<Input
						label="이메일"
						type="text"
						value={email}
						onKeyup={() => {}}
						onChange={() => {}}
						className="has_rd"
						id="email"
						maxLength={100}
						disabled={false}
						margin={{ bottom: 25 }}
						placeholder="이메일을 입력해주세요."
					/>

					<Input
						label="비밀번호"
						type="password"
						value={password}
						onKeyup={() => {}}
						onChange={() => {}}
						className="has_rd"
						id="password"
						maxLength={100}
						disabled={false}
						margin={{ bottom: 40 }}
						placeholder="비밀번호를 입력해주세요."
					/>

					<button
						onClick={() => alert('로그인 버튼')}
						className="btn m_w_100"
						style={{ marginBottom: 12 }}
					>
						로그인
					</button>

					<button className="btn m_w_100 line_btn" onClick={() => {}}>
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
