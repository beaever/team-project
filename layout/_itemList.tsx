import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const Item = () => {
    setIsLoaded(true);
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
      .then((res) => {
        const data = res.data.slice(0, 20);
        setItemLists(data);
        setIsLoaded(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Item();
  }, []);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = itemLists;
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <section className='itemListContainer'>
      <div className='item_inner'>
        <ul className='item_ul'>
          {itemLists.map((item, i) => {
            return (
              <li className='item_li' key={i + 1}>
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
        <div ref={setTarget} className='Target-Element'>
          {isLoaded && <p>Loading...</p>}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
