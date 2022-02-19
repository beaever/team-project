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

interface IpropsDataModel {
  data: {
    id: number;
    name: string;
    content: string;
  };
}

const Terms = (props: IpropsDataModel) => {
  const router = useRouter();
  const propsData = props.data;
  const { mediaQuery } = useWidth();
<<<<<<< HEAD
  const router_type = props.type as string;
  const [termsDetail, setTermsDetail] = useState();
=======
  const [termsDetail, setTermsDetail] = useState(propsData.content);
>>>>>>> 84fb622cb3e66f4edd5cce6c3744fb39e57224ed

  const getTermsName = (router_type: string) => {
    switch (router_type) {
      case 'service':
        return;
      default:
        return '';
    }
  };

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section className='termPage'>
        <div className='termConainer'>
          <h1>{propsData.name}</h1>
          <MarginBottom margin={50} />
          <div className='terms_text'>
            <span dangerouslySetInnerHTML={{ __html: termsDetail }}></span>
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter now_location='home' /> : <Footer />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
<<<<<<< HEAD
  // const name = context.params.name;
  // const apiUrl = `http://3.37.125.107/api/v1/terms/${name}`;
  // const res = await Axios.get(apiUrl);
  // const data = res.data;

  //pageProps로 넘길 데이터
  return { props: { type: context.query.type } };
=======
  const queryTypeName = context.query.type as string;
  const apiUrl = `http://3.37.125.107/api/v1/terms/${queryTypeName}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  // //pageProps로 넘길 데이터
  // return { props: { type: context.query.type } };
  return { props: { data } };
>>>>>>> 84fb622cb3e66f4edd5cce6c3744fb39e57224ed
};

export default Terms;
