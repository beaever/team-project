import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import MarginBottom from '../../../components/layout/margin-bottom';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';

const FindSuccess = (props) => {
  const router = useRouter();
  const { mediaQuery } = useWidth();
  const router_type = props.type as string;

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <main>
        <section>
          <div>
            <h2>LOGO</h2>
            <p>
              <span></span>
            </p>
          </div>
        </section>
      </main>
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
      <MarginBottom margin={100} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //pageProps로 넘길 데이터
  return { props: { type: context.query.type } };
};

export default FindSuccess;
