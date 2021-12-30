import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';

const PcHeader = () => {
	const router = useRouter();
	const [isOpen, setMenu] = useState<boolean>(false);
	const [drop, setDrop] = useState<boolean>(false);
	const drop_ref = useRef(null);
	const drop_container_ref = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setMenu((isOpen) => !isOpen);
	};

	useEffect(() => {
		setMenu((isOpen) => !isOpen);
	}, []);

	return (
		<div className="Gnb">
			<div className="Gnb_inner">
				<ul className="Gnb_ul">
					<Link href="/" as="/">
						<a>
							<h1>BOING GOING</h1>
						</a>
					</Link>
					<ul>
						<Link href="" as="">
							<a>
								<li className="bell-icon Gnb_li">
									<img src="img/bell.svg" alt="" />
								</li>
							</a>
						</Link>
						<li>
							<button
								onClick={() => toggleMenu()}
								className="Gnb_li toggle_btn"
							>
								설정
							</button>
						</li>

						<ul className={isOpen ? 'hide-Btn-menu' : 'show-Btn-menu'}>
							<Link href="/" as="/">
								<a>
									{/* <div className="proflieContainer">
                                            <div className="proflieBox"></div>
                                            <h4>홍길동</h4>
                                            <span>gogo@gmail.com</span>
                                        </div> */}
									<li>계정정보변경</li>
								</a>
							</Link>
							<Link href="/login" as="/login">
								<a>
									<li>프로필 사진 등록</li>
								</a>
							</Link>
							<Link href="/" as="/">
								<a>
									<li>결제내역</li>
								</a>
							</Link>
							<Link href="/" as="/">
								<a>
									<li>1:1 문의</li>
								</a>
							</Link>
						</ul>
						<Link href="/login" as="/login">
							<a>
								<li>로그인</li>
							</a>
						</Link>
					</ul>
				</ul>
			</div>
		</div>
	);
};

export default PcHeader;
