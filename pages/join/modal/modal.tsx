import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import API from '../../../service/api';

const Modal = ({ modalSwitch, props, getTermsName }) => {
  // const [termsDetail, setTermsDetail] = useState(getTermsName);
  const router = useRouter();
  const terms_type = props.type as string;

  // const getTermsName = (terms_type: string) => {
  //   switch (terms_type) {
  //     case 'service':
  //       return 'service';
  //     case 'marketing':
  //       return 'marketing';
  //     case 'personalInfo':
  //       return 'personalInfo';
  //     default:
  //       return '';
  //   }
  // };

  useEffect(() => {
    const getTersDetail = () => {
      API.terms
        .termsDetail({ name: getTermsName(terms_type) })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getTersDetail();
  }, []);

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      modalSwitch();
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
