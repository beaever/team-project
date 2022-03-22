import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Skeleton from '../components/Skeletion/skeletion';
import ItemModal from './modal/itemModal';

interface ItemListDateModal {
  idx: number;
  brand: string;
  name: string;
  price: string;
  item_image: string;
  text: string;
}

const ItemList = () => {
  const [target, setTarget] = useState(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [itemLists, setItemLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollEnd = useRef<any>();

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const Item = () => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json/`)
      .then((res) => {
        const data = res.data.slice(0, 9);
        setItemLists(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Item();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entrise) => {
          if (entrise[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(scrollEnd.current);
    }
  }, [isLoading]);

  const loadMore = () => {
    let Items = itemLists;
    setItemLists((itemLists) => itemLists.concat(Items));
  };

  const router = useRouter();

  return (
    <section className='itemListContainer'>
      <div className='item_inner'>
        {isLoading ? (
          <Skeleton />
        ) : (
          <ul className='item_ul'>
            {itemLists.map((item, i) => {
              return (
                <li className='item_li' key={i}>
                  <div className='item_listBox'>
                    <button className='item_btn' onClick={modalClose}>
                      <h3>{item.name}</h3>
                      <img style={{ width: ' 50px' }} src={item.api_featured_image} alt='' />
                    </button>
                    {modalOpen && <ItemModal itemLists={itemLists} modalClose={modalClose}></ItemModal>}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div ref={scrollEnd}></div>
      </div>
    </section>
  );
};

export default ItemList;
