import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footerinner">
				<h2>GOING BUYING</h2>
				<div className="corporation_area">
					<ul>
						<Link href="/notice" as="/notice">
							<a>
								<li>공지사항</li>
							</a>
						</Link>
						<Link href="/terms" as="/terms">
							<a>
								<li>이용약관</li>
							</a>
						</Link>
						<Link href="/terms" as="/terms">
							<li className="aferNone">개인정보처리방침</li>
						</Link>
					</ul>
				</div>
				<div className="copyright">
					<p>
						회사명 : 고잉바잉 | 대표 : 홍길동 | 주소 : 서울특별시 노원구
						동일로215길 48 | 사업자번호 : 111-11-11111
					</p>
					<p>Copyright 2022. WIT. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
