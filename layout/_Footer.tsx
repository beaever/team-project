
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerinner">
            <h2>GOING BUYING</h2>
            <div className="corporation_area">
                <ul>
                    <li><a href="/">공지사항</a></li>
                    <li><a href="/">이용약관</a></li>
                    <li className="aferNone"><a href="/">개인정보처리방침</a></li>        
                </ul>
            </div>
            <div className="copyright">
                <p>회사명 : 고잉바잉  |   대표 : 홍길동   |   주소 : 서울특별시 노원구 동일로215길 48   |   사업자번호 : 111-11-11111</p>
                <p>Copyright 2022. WIT. All rights reserved</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;