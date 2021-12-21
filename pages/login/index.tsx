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
							<h2>LOGO</h2>
							<h3>아이디</h3>
							<input
								className="loginInput"
								type="email"
								placeholder="예) fromby@email.co.kr"
							/>
							<h3>비밀번호</h3>
							<input className="loginInput" type="password" />
							<button className="login_btn">로그인</button>
							<div className="sns_btn">
								<button onClick={() => GoSnsJoin()}>카카오</button>
								<button onClick={() => GoSnsJoin()}>구글</button>
								<button onClick={() => GoSnsJoin()}>네이버</button>
							</div>
							<div className="util_btn">
								<button onClick={() => onMove()}>회원가입</button>
								<Link href="/find" as="/find">
									<a>
										<button>아이디찾기</button>
										<button>비밀번호찾기</button>
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
