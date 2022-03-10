import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ItemListDateModel {
  idx: number;
  title: string;
}
const ItemSlide = () => {
  const [itemLists, setItemLists] = useState([]);
  const Item = () => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
      .then((res) => {
        const data = res.data.slice(0, 10);
        setItemLists(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Item();
  }, []);

  return (
    <ul className='itemSlideContainer_ul'>
      {itemLists?.map((item) => {
        return (
          <Link href='/' as='/'>
            <li className='itemSlideContainer_li' key={item.id}>
              <h3 className='slide_h3'> {item.brand}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
export default ItemSlide;
