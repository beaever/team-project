import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import useLoginState from '../hooks/useLoginState';
import MarginBottom from '../components/layout/margin-bottom';

const PcHeader = () => {
	const router = useRouter();
	const { loginForm } = useLoginState('load-login');
	const [isOpen, setMenu] = useState<boolean>(false);
	const [drop, setDrop] = useState<boolean>(false);
	const drop_ref = useRef(null);
	const drop_container_ref = useRef<HTMLDivElement>(null);
	const member = null;

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
				{member && member.idx ? (
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
							<Link href="#">
								<a onClick={() => {}}>내정보</a>
							</Link>
						</li>
						<li>
							<div className="line" />
						</li>
						<li>
							<Link href="#">
								<a onClick={() => {}}>로그아웃</a>
							</Link>
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
							<Link href="/join">회원가입</Link>
						</li>
					</>
				)}
			</div>

			{member && member.idx && (
				<div
					className={`aside ${drop ? 'show' : ''}`}
					style={{ height: drop ? 'auto' : 0 }}
				>
					<div className="profile-wrap">
						<div className="profile-img-wrap">
							<div className="profile-img-holder">
								<img
									src="icons/noprofile.png"
									alt="프로필이미지"
									id="profile_img"
								/>
							</div>
							<input
								type="file"
								className="hidden"
								name="profile"
								// onChange={changeProfileFile}
							/>
							<button className="pencil-img-holder" onClick={() => {}}>
								<img src="icons/pencle" alt="프로필이미지수정아이콘" />
							</button>
						</div>
						<div className="text-wrap">
							<div className="name-wrap">
								{member.is_pro && (
									<div className="pro-icon-wrap clearfix">
										<div className="pro-img-holder">
											<img src="icons/crown.png" alt="프로아이콘" />
										</div>
										<span>Pro</span>
									</div>
								)}
								<div className="name-company">
									<span className="name">
										{member.name ? member.name : 'Apple 회원'}
									</span>
									{member.type === 'C' && member.company_name && (
										<>
											<div className="vertical-line"></div>
											<span className="company">{member.company_name}</span>
										</>
									)}
								</div>
							</div>
							<div className="email-wrap">
								<span>{member.email ? member.email : '비공개'}</span>
							</div>
						</div>
						{member.type !== 'C' && member.is_profile == false && (
							<>
								<MarginBottom margin={20} />
								<div className="btn-wrap">
									<button
										className="btn"
										onClick={() => router.push('/setting/profile')}
									>
										프로필 등록하러가기
									</button>
								</div>
							</>
						)}
					</div>
					<div className="list">
						{member.type !== 'C' && member.is_profile && (
							<>
								<Link href="/setting/profile">
									<a className="clearfix item">
										<span>프로필 관리</span>
										<img
											className="floatR"
											src={'icons/arrow_right.png'}
											alt="화살표아이콘"
										/>
									</a>
								</Link>
								{!member?.is_pro && (
									<Link
										href={`/apply/pro/${
											member.type === 'M' ? 'model' : 'photo'
										}`}
									>
										<a className="clearfix item">
											<span>프로신청하기</span>
											<img
												className="floatR"
												src={'icons/arrow_right.png'}
												alt="화살표아이콘"
											/>
										</a>
									</Link>
								)}

								<Link href={`/apply/calculate`}>
									<a className="clearfix item">
										<span>정산신청하기</span>
										<img
											className="floatR"
											src={'icons/arrow_right.png'}
											alt="화살표아이콘"
										/>
									</a>
								</Link>
							</>
						)}
						<Link href="/setting/info">
							<a className="clearfix item">
								<span>계정정보 변경</span>
								<img
									className="floatR"
									src={'icons/arrow_right.png'}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/history/payment">
							<a className="clearfix item">
								<span>결제내역</span>
								<img
									className="floatR"
									src={'icons/arrow_right.png'}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/bookmark">
							<a className="clearfix item">
								<span>북마크</span>
								<img
									className="floatR"
									src={'icons/arrow_right.png'}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/coupon">
							<a className="clearfix item">
								<span>쿠폰함</span>
								<img
									className="floatR"
									src={'icons/arrow_right.png'}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/inquiry">
							<a className="clearfix item">
								<span>1:1문의</span>
								<img
									className="floatR"
									src={'icons/arrow_right.png'}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default PcHeader;
