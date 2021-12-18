import Link from 'next/link'

const ItemSlide = (img) => {
    //   ({category_item})
return (
    // <div>
    //     <Link href="" as={''}>
    //        {category_item.map((category_item)=> {
    //             <a>
    //                 <ul>
    //                     <li className={category_item.catgory_id}>
    //                         <img className="itemSlideBox" src={category_item.item_imge} />
    //                     </li>
    //                 </ul>
    //             </a>
    //        })}
    //     </Link>   
    // </div>
   <div>
        <ul className="itemSlideContainer">
            <li>
                <img className="itemSlideBox"  />
            </li>
        </ul>
   </div>
         
 
);
}
export default ItemSlide;