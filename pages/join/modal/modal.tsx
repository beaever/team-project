import React, { useEffect, useState } from 'react';

const Modal = ({ modalSwitch }) => {
  const onCloseModal = (e) => {
    console.log('e.target: ', e.target);
    console.log('e.tarcurrentTargetget: ', e.currentTarget);
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
