import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemSlider from '../layout/_itemSlider';
import Slider from '../layout/_slider';
import ItemList from '../layout/_itemList';
import useWidth from '../hooks/useWitdh';
import MarginTop from '../components/layout/margin-top';
import MobileHeader from '../layout/_mobileHeader';
import PcHeader from '../layout/_pcHeader';
import MarginBottom from '../components/layout/margin-bottom';
import MobileFooter from '../layout/_mobileFooter';
import Footer from '../layout/_Footer';

export default function Home() {
  const router = useRouter();
  const { mediaQuery } = useWidth();

  // useEffect
  useEffect(() => {
    console.log(mediaQuery);
  }, [mediaQuery]);

  // RETURN
  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section className='mainPage'>
        <div className='mainContainer'>
          {/* <Slider /> */}
          <ItemSlider />
          <ItemList />
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter now_location='home' /> : <Footer />}
    </>
  );
}
