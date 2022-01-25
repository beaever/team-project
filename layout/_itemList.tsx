import { useState } from 'react';
import ItemModal from './modal/itemModal';

interface ItemListDateModal {
  idx: number;
  brand: string;
  name: string;
  price: string;
  item_image: string;
}

const ItemList = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const [itemList, SetItemList] = useState<ItemListDateModal[]>([
    {
      idx: 1,
      brand: 'NIKE',
      name: 'Jodan 1',
      price: '10000',
      item_image: '사진이미지',
    },
    {
      idx: 2,
      brand: 'Off-White',
      name: 'Sneakers Low',
      price: '20000',
      item_image: '사진 이미지',
    },
    {
      idx: 3,
      brand: 'IAB STUDIO',
      name: '블랙 반팔',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 4,
      brand: 'Supreme',
      name: 'Air Force 1 Low Flax ',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 5,
      brand: 'New Balance',
      name: '993 Grey ',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 6,
      brand: 'Adidas',
      name: 'Yeezy Boost 350 V2',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 7,
      brand: 'Maison Margiela',
      name: 'Calfskin Replica Sneakers',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 8,
      brand: 'Supreme',
      name: 'Air Force 1 Low Flax ',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 9,
      brand: 'IAB STUDIO',
      name: '블랙 반팔',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 10,
      brand: 'NIKE',
      name: 'Jodan 1',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 11,
      brand: 'New Balance',
      name: '993 Grey ',
      price: '10000',
      item_image: '사진 이미지',
    },
    {
      idx: 12,
      brand: 'Maison Margiela',
      name: 'Calfskin Replica Sneakers',
      price: '10000',
      item_image: '사진 이미지',
    },
  ]);

  return (
    <section className='itemListContainer'>
      <div className='item_inner'>
        <ul className='item_ul'>
          {itemList.map((item) => {
            return (
              <li className='item_li' key={item.idx}>
                <div className='item_listBox'>
                  <button onClick={modalClose}>
                    <img src={item.item_image} alt='' />
                    <h3>{item.brand}</h3>
                    <span className='item_name'>{item.name}</span>
                    <span className='item_price'>{item.price}</span>
                  </button>
                  {modalOpen && <ItemModal modalClose={modalClose}></ItemModal>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ItemList;
