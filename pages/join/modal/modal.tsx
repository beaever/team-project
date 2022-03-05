import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import API from '../../../service/api';
import { GetServerSideProps } from 'next';
import Axios from 'axios';

interface IpropsDataModel {
  data: {
    id: number;
    name: string;
    content: string;
  };
}

const Modal = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState<Boolean>(false);
  // const [termsDetail, setTermsDetail] = useState(propsData.content);
  // console.log(termsDetail);

  useEffect(() => {
    (async () => {
      const apiUrl = `http://3.37.125.107/api/v1/terms`;
      const res = await Axios.get(apiUrl);
      const data = res.data;
      console.log(data);
    })();
  });

  const onSwitch = () => {
    setToggle(!toggle);
  };

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onSwitch();
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <div className='modal__container' onClick={onCloseModal}>
      <div className='modal'>
        <div className='modal_terms'>
          <h2> 이용약관</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
