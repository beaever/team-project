import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import useLoginState from '../hooks/useLoginState';
import MarginBottom from '../components/layout/margin-bottom';

const PcHeader = () => {
	const router = useRouter();
	const { loginForm, setLoginForm } = useLoginState('load-login');
	const [isOpen, setMenu] = useState<boolean>(false);
	const [drop, setDrop] = useState<boolean>(false);
	const drop_ref = useRef(null);
	const drop_container_ref = useRef<HTMLDivElement>(null);
	const member = null;

	const onClickLogout = () => {
		setLoginForm({
			['login']: false,
		});
	};

	const toggleMenu = () => {
		setMenu((isOpen) => !isOpen);
	};

	useEffect(() => {
		setMenu((isOpen) => !isOpen);
	}, []);

	useEffect(() => {
		console.log(loginForm?.login);
	}, [loginForm]);

	return (
		<header className="pc_header">
			<Link href="/">
				<a className="logo">
					<img src="icon/logo.svg" alt="" />
				</a>
			</Link>

			<div className="top_menu right_menu clearfix">
				{loginForm && loginForm.login ? (
					<>
						<li>
							<Link href="/alert">
								<a>
									<img src="img/bell.svg" alt="알람이미지" />
								</a>
							</Link>
						</li>
						<li>
							<div className="line" />
						</li>
						<li>
							<button
								onClick={() => {
									setDrop(!drop);
								}}
							>
								내정보
							</button>
						</li>
						<li>
							<div className="line" />
						</li>
						<li>
							<button onClick={onClickLogout}>로그아웃</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link href="/login">로그인</Link>
						</li>
						<li>
							<div className="line" />
						</li>
						<li>
							<Link href="/login">회원가입</Link>
						</li>
					</>
				)}
			</div>

			{loginForm && loginForm?.login && (
				<div
					className={`aside ${drop ? 'show' : ''}`}
					style={{ height: drop ? 'auto' : 0 }}
				>
					<div className="profile-wrap">
						<div className="profile-img-wrap">
							<div className="profile-img-holder">
								<img
									src="icon/noprofile.png"
									alt="프로필이미지"
									id="profile_img"
								/>
							</div>
							<input
								type="file"
								style={{ display: 'none' }}
								name="profile"
								// onChange={changeProfileFile}
							/>
							<button className="pencil-img-holder" onClick={() => {}}>
								<img src="icon/pencil.png" alt="프로필이미지수정아이콘" />
							</button>
						</div>
						<div className="text-wrap">
							<div className="name-wrap">
								<div className="name-company">
									<span className="name">김진영</span>
								</div>
							</div>
							<div className="email-wrap">
								<span>kjy@gmail.com</span>
							</div>
						</div>
					</div>

					<MarginBottom margin={20} />
					<div className="drop-list">
						<Link href="/setting/profile">
							<a className="clearfix drop-item">
								<span>마이페이지</span>
								<img src={'icon/arrow_right.png'} alt="화살표아이콘" />
							</a>
						</Link>

						<Link href="/history/payment">
							<a className="clearfix drop-item">
								<span>채팅</span>
								<img src={'icon/arrow_right.png'} alt="화살표아이콘" />
							</a>
						</Link>

						<Link href="/inquiry">
							<a className="clearfix drop-item">
								<span>1:1문의</span>
								<img src={'icon/arrow_right.png'} alt="화살표아이콘" />
							</a>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default PcHeader;
