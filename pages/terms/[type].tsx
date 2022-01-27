import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import MarginBottom from '../../components/layout/margin-bottom';
import MarginTop from '../../components/layout/margin-top';
import useWidth from '../../hooks/useWitdh';
import Footer from '../../layout/_Footer';
import MobileFooter from '../../layout/_mobileFooter';
import MobileHeader from '../../layout/_mobileHeader';
import PcHeader from '../../layout/_pcHeader';
import { termsText, termsTitle } from '../../shared/function';

const Terms = (props) => {
  const router = useRouter();
  const { mediaQuery } = useWidth();
  const router_type = props.type as string;

  useEffect(() => {
    console.log(router_type);
  }, []);

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section className='termPage'>
        <div className='termConainer'>
          <h1>{termsTitle(router_type)}</h1>
          <MarginBottom margin={50} />
          <div className='terms_text'>
            <span dangerouslySetInnerHTML={{ __html: termsText(router_type) }}></span>
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter now_location='home' /> : <Footer />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //pageProps로 넘길 데이터
  return { props: { type: context.query.type } };
};

export default Terms;
