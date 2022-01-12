import React, { useEffect } from 'react';
import styled from 'styled-components';
import MarginBottom from '../components/layout/margin-bottom';
import MarginTop from '../components/layout/margin-top';
import useWidth from '../hooks/useWitdh';
import Footer from '../layout/_Footer';
import MobileFooter from '../layout/_mobileFooter';
import MobileHeader from '../layout/_mobileHeader';
import PcHeader from '../layout/_pcHeader';

const Custom404Page = () => {
  const { mediaQuery } = useWidth();

  useEffect(() => {}, []);
  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <section id='errorPage'>
        <div className='errorPage-container'>
          <h2 className='errorPage-title'>
            <img src='error_icon.svg' alt='error-icon' />
          </h2>
          <MarginBottom margin={100} />
          <p>PAGE NOT FOUND</p>
        </div>
      </section>
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export default Custom404Page;
