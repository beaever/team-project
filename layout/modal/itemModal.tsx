import React, { useEffect, useState } from 'react';

const ItemModal = ({ modalClose, itemLists }) => {
  const onCloseModal = (e) => {
    // console.log('e.target: ', e.target);
    // console.log('e.tarcurrentTargetget: ', e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
	      position: fixed;
	      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const { brand, name, text, idx } = itemLists;

  console.log(itemLists);
  return (
    <div className='modal__container' onClick={onCloseModal}>
      <div className='modal_itemContainer'>
        <div className='modal_itemListBox'>
          <div className='modal_itemImg'>
            <img src='img/옷1.png' alt='' />
            <img src='img/옷1.png' alt='' />
          </div>
          <div className='modal_itemInfo' key={idx}>
            <h3>{brand}</h3>
            <span>{name}</span>
            <div className='modal_itemTextInfo'>{text}</div>
            <span>#해쉬태그#해쉬태그#해쉬태그#해쉬태그</span>
            <div className='modal_btnBox'>
              <button className='modal_btnTerm'>인증마크</button>
              <button className='modal_btn'>문의하기</button>
              <button className='modal_btn'>바로구매</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
