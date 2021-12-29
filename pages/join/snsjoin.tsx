import React from 'react';
import { useRouter } from 'next/dist/client/router';
import useInput from '../../hooks/useInput';
import { useState } from 'react';
import CheckBox from '../../components/input/checkbox';

const SnsJoin = () => {
	const router = useRouter();
	const userid = useInput('');
	const password = useInput('');
	const userphone = useInput('');
	const [passwordCheck, setPasswordCheck] = useState<string>('');
	const [passwordError, setPasswordError] = useState<boolean>(false);

	const [term, setTerm] = useState<boolean>(false); //약관 동의여부
	const [termError, setTermError] = useState<boolean>(false);

	

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = e;
		setPasswordError(password.value !== value); //같으면 false 다르면 true
		setPasswordCheck(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password.value !== passwordCheck) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}

		if (!term) {
			setTermError(true);
		}
	};

	const handleTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTermError(e.target.checked !== true);
		setTerm(e.target.checked);
		// setAgree(e.target.checked);
	};

	// const allhandleTrem = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const current_agree = agree1 && agree2 && agree3;
		
	// 	setAgree({
	// 		agree1: !current_agree,
	// 		agree2: !current_agree,
	// 		agree3: !current_agree,
	// 		agree4: !current_agree,
    //         agree5: !current_agree,
	// 	});
	// }

	const onBlurValidCheck = (e: React.FocusEvent<HTMLInputElement>) => {
		const id = e.currentTarget.id;
		const value = (e.currentTarget.value as string) ?? '';
		if (id === 'id') {
			if (value === '') {
				alert('이메일을 입력해주세요.');
			}
		} else if (id === 'password') {
			if (value === '') {
				alert('비밀번호를 입력해주세요.');
			} else if (value.length < 6) {
				alert('비밀번호는 6 ~ 20 사이로 설정해주세요.');
			}
		}
	};

	const onClick = () => {
		if (termError === false && passwordError === false) {
			router.push('/');
		}
	};

	// const [agree, setAgree] = useState({
	// 	agree1: false,
	// 	agree2: false,
	// 	agree3: false,
	// 	agree4: false,
	// 	agree5: false,
	// });

	// const  { agree1, agree2, agree3 } = agree;

	return (
		<>
			<section className="JoinPage">
				<div className="Join_Container">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="join_section">
							<div>
								<h2>SNS 회원가입</h2>
								<div>
									<h3>이메일주소</h3>
									<span>logo@gmail.com</span>
									<h3>비밀번호</h3>
									<input
										className="joinInput"
										id="password"
										type="password"
										onBlur={(e) => onBlurValidCheck(e)}
										{...password}
										maxLength={20}
										placeholder="비밀번호를 입력해주세요"
									/>
									<input
										className="joinInput"
										id="password"
										type="password"
										value={passwordCheck}
										onChange={(e) => handlePassword(e)}
										placeholder="비밀번호를 다시 입력해주세요"
									/>
									{passwordError && (
										<div style={{ color: 'red' }}>
											비밀번호가 일치하지 않습니다.
										</div>
									)}
								</div>
								<div className="phoneBox">
								    <h3>연락처</h3>
									<form className="telInputBox">
										<input type="tel" name="phone1" />
										<button className="Join_Container_btn" type="submit">인증요청</button>
									</form>
								</div>
								<div className="termCheckBox">
									<button className="term_btn">
										<CheckBox
										name={"모두 동의"}
										id={'term'}
										checked={term}
										onChange= {(e)=> handleTerm(e)}
										/>
										{/* <label htmlFor="term">모든 이용약관 동의</label> */}
									</button>
									<button className="term_btn">
										<CheckBox
										name={""}
										id={'term1'}
										checked={term}
										onChange= {(e)=>(e)}
										/>
										{/* <label htmlFor="term1">이용약관 동의1</label> */}
									</button>
									<button className="term_btn">
										<CheckBox
										name={"모두 동의"}
										id={'term2'}
										checked={term}
										onChange= {(e)=> handleTerm(e)}
										/>
										{/* <label htmlFor="term2">이용약관 동의2</label> */}
									</button>
									<button className="term_btn">
										<CheckBox
										name={"모두 동의"}
										id={'term3'}
										checked={term}
										onChange= {(e)=> (e)}
										/>
										{/* <label htmlFor="term3">이용약관 동의3</label> */}
									</button>
									{termError && (
										<div style={{ color: 'red' }}>약관 동의 바람</div>
									)}
								</div>
								<button className="Join_Container_btn btn" type="submit" onClick={() => onClick()}>
									회원가입완료
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};
export default SnsJoin;
