import Link from 'next/link';

interface ItemListDateModel {
  idx: number;
  title: string;
}
const ItemSlide = ({ itemLists }) => {
  return (
    <ul className='itemSlideContainer_ul'>
      {itemLists?.map((item) => {
        return (
          <Link href='/' as='/' key={item.id}>
            <li className='itemSlideContainer_li'>
              <h3 className='slide_h3'> {item.brand}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
export default ItemSlide;
