import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Button from '../../../components/input/button';
import MarginBottom from '../../../components/layout/margin-bottom';
import MarginTop from '../../../components/layout/margin-top';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';

const FindSuccess = (props) => {
  const router = useRouter();
  const { mediaQuery } = useWidth();
  const router_type = props.type as string;

  // Router Type 에 따른 Text Render Function
  const typeTextRender = (type: string) => {
    if (type === 'email') {
      return `김진영 님의 이메일은<br> kjy29350@gmail.com 입니다 :)`;
    } else if (type === 'password') {
      return `비밀번호 재설정이 완료 되었습니다 :)`;
    }
  };

  useEffect(() => {
    if (router_type !== 'email' && router_type !== 'password') {
      alert('회원님이 이용할 수 없는 페이지 입니다.');
      router.push('/404');
    }
  }, []);

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={200} />
      <section id='complete'>
        <div className='complete-container'>
          <img className='sub_logo' src='/icon/sub_logo.svg' alt='서브로고' />
          <MarginBottom margin={40} />
          <p className='complete-text' dangerouslySetInnerHTML={{ __html: typeTextRender(router_type) }}></p>
          <MarginBottom margin={50} />
          <div className='complete-btn-box'>
            <Button className='complete-btn prime' label='로그인' onClick={() => router.push('/login')} />
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //pageProps로 넘길 데이터
  return { props: { type: context.query.type } };
};

export default FindSuccess;
