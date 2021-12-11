
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerinner">
            <div className="service_area">
                <address className="footeraddr">
                    <h3>
                        <a href="tel:1588-xxxx">고객센터 1588-xxxx</a>
                    </h3>
                    <p>운영시간평일 11:00 - 18:00 (토 ∙ 일, 공휴일 휴무)</p>
                    <p>점심시간평일 13:00 - 14:00</p>
                    <span>1:1 문의하기는 앱에서만 가능합니다.</span><br />
                    <button type="button">
                        <a href="/">자주 묻는 질문</a>
                    </button>
                </address>      
                <div className="footerbox">
                    <h3>이용안내</h3>
                    <ul>
                        <li><a href="/">검수기준</a></li>
                        <li><a href="/">이용정책</a></li>
                        <li><a href="/">패널티정책</a></li>
                    </ul>
                </div>
                <div className="footerbox">
                    <h3>고객안내</h3>
                    <ul>
                        <li><a href="/">공지사항</a></li>
                        <li><a href="/">서비스소개</a></li>
                        <li><a href="/">판매자 방문접수</a></li>
                    </ul>
                </div>

                        
            </div>
            <div className="corporation_area">
                <ul>
                    <li><a href="/">회사소개</a></li>
                    <li><a href="/">인재채용</a></li>
                    <li><a href="/">이용약관</a></li>
                    <li><a href="/">개인정보처리</a></li>        
                </ul>
            </div>
            <div className="copyright">
                <p> 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별 판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.</p>
                <p>© 2021 COPY RIGHT</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;