import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerinner'>
        <h2>
          <Link href='/' as='/'>
            <a>
              <img src='../icon/sub_logo.svg' alt='sub_logo' />
            </a>
          </Link>
        </h2>
        <div className='corporation_area'>
          <ul>
            <Link href='/notice' as='/notice'>
              <a>
                <li>공지사항</li>
              </a>
            </Link>
            <Link href='/terms/service' as='/terms/service'>
              <a>
                <li>이용약관</li>
              </a>
            </Link>
            <Link href='/terms/personalInfo' as='/terms/personalInfo'>
              <a>
                <li className='aferNone'>개인정보처리방침</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className='copyright'>
          <p>회사명 : SELLBAR | 대표 : 김진영 | 주소 : 서울특별시 노원구 동일로215길 48 | 사업자번호 : 111-11-11111</p>
          <p>Copyright 2022. WIT. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
