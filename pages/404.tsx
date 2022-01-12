import React, { useEffect } from 'react';
import MarginBottom from '../components/layout/margin-bottom';
import useWidth from '../hooks/useWitdh';
import Footer from '../layout/_Footer';
import MobileFooter from '../layout/_mobileFooter';
import MobileHeader from '../layout/_mobileHeader';
import PcHeader from '../layout/_pcHeader';
import { backgroundColorChange } from '../shared/function';

const Custom404Page = () => {
  const { mediaQuery } = useWidth();
  const text = `사용되지 않는 페이지 입니다!`;

  useEffect(() => {
    backgroundColorChange('on');
    return () => {
      backgroundColorChange('off');
    };
  }, []);
  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <section id='errorPage'>
        <div className='errorPage-container'>
          <h2 className='errorPage-title'>
            <img src='/icon/error_icon.svg' alt='error-icon' />
          </h2>
          <MarginBottom margin={50} />
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </section>
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export default Custom404Page;
