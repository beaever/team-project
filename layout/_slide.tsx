import Link from 'next/link'

const slide = (img) => {
            //   ({item}:any)
   return (
      //  <div>
      //    <Link href="/" as={""}>
      //          <a>
      //             {item.map((item)=>{
      //                   <img className="imgBox" src={item.item_imge} />
      //             })}
      //          </a>
      //    </Link>
      //  </div>
    <img className="imgBox"src={img} />
   );
}
export default slide;