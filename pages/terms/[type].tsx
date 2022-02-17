import Axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { json } from 'node:stream/consumers';
import React, { useEffect, useState } from 'react';
import MarginBottom from '../../components/layout/margin-bottom';
import MarginTop from '../../components/layout/margin-top';
import useWidth from '../../hooks/useWitdh';
import Footer from '../../layout/_Footer';
import MobileFooter from '../../layout/_mobileFooter';
import MobileHeader from '../../layout/_mobileHeader';
import PcHeader from '../../layout/_pcHeader';
import API from '../../service/api';
import { termsText, termsTitle } from '../../shared/function';

const Terms = (props) => {
  const router = useRouter();
  const { mediaQuery } = useWidth();
  const router_type = props.type as string;

  const [termsDetail, setTermsDetail] = useState();

  const getTermsName = (router_type: string) => {
    switch (router_type) {
      case '1':
        return 'service';
      default:
        return '';
    }
  };

  // useEffect(() => {
  //   fetch(`http://3.37.125.107/api/v1/terms/`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  // const getTermsText = (router_type: string) => {
  //   switch (router_type) {
  //     case '1':
  //       return setTermsDetail;
  //     default:
  //       return '';
  //   }
  // };

  // const getTersDetail = () => {
  //   API.terms
  //     .termsDetail({ name: getTermsName(router_type) })
  //     .then((res) => {
  //       console.log(res);
  //       // const response = res.request.responseURL;
  //       // console.log(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section className='termPage'>
        <div className='termConainer'>
          <h1>{getTermsName(router_type)}</h1>
          <MarginBottom margin={50} />
          <div className='terms_text'>
            <span dangerouslySetInnerHTML={{ __html: getTermsName(router_type) }}></span>
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
