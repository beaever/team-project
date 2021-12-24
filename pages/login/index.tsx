import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import API from '../../service/api';
import UserMemberInfoResponseDataModel from '../../service/api/user/model/user-member-info-response-data-model';
import Link from 'next/link';

const Login = () => {
	const router = useRouter();

	const onMove = () => {
		router.push('/join');
	};

	const GoSnsJoin = () => {
		router.push('/join/snsjoin');
	};

	const getMemberInfo = () => {
		API.user
			.memberInfo({ token: 'token' })
			.then((res) => {
				const data = res.data as UserMemberInfoResponseDataModel;
				if (data.code === 200) {
					console.log(data.data);
					router.push('/');
				} else {
					alert(data.msg);
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		getMemberInfo();
	}, []);

	return (
		<>
			<section className="LoginPage">
				<div className="Login_Container">
					{/* <form> */}
					<div className="login_section">
						<div>
							<h2>로그인</h2>
							<h3>이메일</h3>
							<input
								className="loginInput"
								type="email"
								placeholder="예) fromby@email.co.kr"
							/>
							<h3>비밀번호</h3>
							<input className="loginInput" type="password" />
							<button className="login_btn">로그인</button>
							 <div className="hr-sect"> 소셜 로그인 </div>
							<div className="sns_btn">
								<button className="kakao_btn" onClick={() => GoSnsJoin()}>카카오</button>
								<button className="naver_btn" onClick={() => GoSnsJoin()}>네이버</button>
								<button className="join_btn"onClick={() => onMove()}>회원가입</button>
							</div>
							<div className="util_btn">
								<Link href="/find" as="/find">
									<a>
										<button>이메일 / 비밀번호 찾기</button>
									</a>
								</Link>
							</div>
						</div>
					</div>
					{/* </form> */}
				</div>
			</section>
		</>
	);
};

export default Login;
