import Link from 'next/link';
import { useState } from 'react';

interface ItemListDateModel {
  idx: number;
  title: string;
}
const ItemSlide = () => {
  const [itemList, setItemList] = useState<ItemListDateModel[]>([
    {
      idx: 1,
      title: '나이키',
    },
    {
      idx: 2,
      title: '아디다스',
    },
    {
      idx: 3,
      title: '반스',
    },
    {
      idx: 4,
      title: '푸마',
    },
    {
      idx: 5,
      title: 'APC',
    },
    {
      idx: 6,
      title: '스투시',
    },
    {
      idx: 7,
      title: '노스페이스',
    },
    {
      idx: 8,
      title: '나나미카',
    },
    {
      idx: 9,
      title: '비즈빔',
    },
    {
      idx: 10,
      title: '아크네',
    },
  ]);
  return (
    <ul className='itemSlideContainer_ul'>
      {itemList?.map((item) => {
        return (
          <Link href='/' as='/'>
            <li className='itemSlideContainer_li' key={item.idx}>
              {item.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
export default ItemSlide;
