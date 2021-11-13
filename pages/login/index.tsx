import React from "react";
import { useRouter } from "next/dist/client/router";

const Login = () => {
	const router = useRouter();

	const onMove = () => {
		router.push("/join");
	};

	return (
		<>
			<section>
				<button>로그인</button>
				<button onClick={() => onMove()}>회원가입</button>
			</section>
		</>
	);
};

export default Login;
