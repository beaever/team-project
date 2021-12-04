import React from "react";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";



const Section = styled.section`
	width: 100%;
    height: 135vh;
    background-color: tomato;
`

const Container = styled.div`
	position: absolute;
    background-color: #fff;
    top: 50%;
    left: 50%;
    text-align: center;
    margin-left: -266px;
    margin-top: -190px;
    width: 532px;
    h2 {
        font-size: 35px;
        font-weight: bold;
    }
	
`


const Login = () => {
	const router = useRouter();
	const onMove = () => {
		router.push("/join");
		// window.location.href = '/join'
	};

	return (
		<>

			<section className="LoginPage">
				<div className="Login_Container">
					<form>
						<div className="login_section">
							<div>
								<h2>LOGO</h2>
								<h3>아이디</h3>
								<input className="loginInput" type="email" placeholder="예) fromby@email.co.kr"/>
								<h3>비밀번호</h3>
								<input className="loginInput" type="password"/>
								<button className="login_btn">로그인</button>
								<div className="sns_btn">
									<button>카카오</button>
									<button>구글</button>
									<button>네이버</button>
								</div>
								<div className="util_btn">
									<button onClick={() => onMove()}>회원가입</button>
									<button>아이디찾기</button>
									<button>비밀번호찾기</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Login;
