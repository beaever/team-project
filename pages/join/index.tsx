import React from 'react';
import { useRouter } from 'next/dist/client/router';
import useInput from '../../hooks/useInput';
import { useState } from 'react';

const Join = () => {
	const router = useRouter();

	const userid = useInput('');
	const password = useInput('');
	const userphone = useInput('');

	// const [checkEmail,setCheckEmail] = useState<string>('');
	// const [checkEmailError,setCheckEmailError] = useState<boolean>(false);
	const [passwordCheck, setPasswordCheck] = useState<string>('');
	const [passwordError, setPasswordError] = useState<boolean>(false);

	const [term, setTerm] = useState<boolean>(false); //약관 동의여부
	const [termError, setTermError] = useState<boolean>(false);

	//   const handleEmail=(event)=>{
	//     const {
	//       target: { value },
	//   } = event;
	//   setCheckEmail(event.target.value)
	//   setCheckEmailError(event.target.value === '')
	//  }

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
	};

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

	return (
		<>
			<section className="JoinPage">
				<div className="Join_Container">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="join_section">
							<div>
								<h2>회원가입</h2>
								<div>
									<h3>이메일주소</h3>
									<input
										className="joinInput"
										id="id"
										type="email"
										{...userid}
										onBlur={(e) => onBlurValidCheck(e)}
										placeholder="예) fromby@email.co.kr"
									></input>
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
									<form className="telInputBox">
										<h3>연락처</h3>
										<input type="tel" name="phone1" />
										{/* <input type="tel" name="phone2" />
										<input type="tel" name="phone3" /> */}
										<button type="submit">인증요청</button>
									</form>
								</div>
								<div className="termCheckBox">
									<label htmlFor="term">이용약관 동의</label>
									<input
										className="termCheckBox"
										id="term"
										type="checkbox"
										checked={term}
										onChange={(e) => handleTerm(e)}
									/>
									<br />
									<label htmlFor="term2">이용약관 동의</label>
									<input
										className="termCheckBox"
										id="term2"
										type="checkbox"
										checked={term}
										onChange={(e) => handleTerm(e)}
									/>
									<br />
									<label htmlFor="term3">이용약관 동의</label>
									<input
										className="termCheckBox"
										id="term3"
										type="checkbox"
										checked={term}
										onChange={(e) => handleTerm(e)}
									/>
									<br />
									{termError && (
										<div style={{ color: 'red' }}>약관 동의 바람</div>
									)}
								</div>
								<button className="btn" type="submit" onClick={() => onClick()}>
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
export default Join;
