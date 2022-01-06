import { useRouter } from 'next/router';
import React from 'react';
import InputText from '../../../components/input/inputText';
import MarginBottom from '../../../components/layout/margin-bottom';
import MarginTop from '../../../components/layout/margin-top';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';
import PhoneCertification from '../../../components/input/phone-Certification';

const Mypage = () => {
  const router = useRouter();
  const { mediaQuery } = useWidth();

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section id='mypage'>
        <div className='container'>
          <h2 className='title'>계정정보 변경</h2>
          <MarginBottom margin={17} />
          <div className='item'>
            <InputText type='text' label='이메일' readonly disabled value='kjy29350@gmail.com' />
          </div>
          <MarginBottom margin={17} />
          <div>
            <InputText type='password' label='비밀번호' />
            <MarginBottom margin={10} />
            <InputText type='password' />
          </div>
          <MarginBottom margin={17} />
          <div className='item'>
            <InputText type='text' readonly disabled label='이름' value='이름' />
            <InputText type='text' label='닉네임' />
          </div>
          <MarginBottom margin={17} />
          <div className='item'>
            <PhoneCertification required={false} />
          </div>
          <div className='item'>
            <p>
              <span>
                탈퇴하기
                <img src='../icon/arrow_right.png' alt='오른쪽 화살표' />
              </span>
            </p>
          </div>
        </div>
      </section>
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
      <MarginBottom margin={100} />
    </>
  );
};

export default Mypage;
