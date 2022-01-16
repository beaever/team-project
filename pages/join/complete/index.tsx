import { useRouter } from 'next/dist/client/router';
import Button from '../../../components/input/button';
import MarginBottom from '../../../components/layout/margin-bottom';
import MarginTop from '../../../components/layout/margin-top';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';

const JoinComplete = () => {
  const router = useRouter();
  const { mediaQuery } = useWidth();

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={200} />
      <section id='complete'>
        <div className='complete-container'>
          <img className='sub_logo' src='/icon/logo.svg' alt='서브로고' />
          <MarginBottom margin={40} />
          <p className='complete-text'>반갑습니다. 김진영님:)</p>
          <MarginBottom margin={50} />
          <div className='complete-btn-box'>
            <Button className='complete-btn prime' label='메인페이지로 이동하기' onClick={() => router.push('/')} />
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export default JoinComplete;
