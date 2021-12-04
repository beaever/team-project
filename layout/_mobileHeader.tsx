import Link from 'next/link'
import { useRouter } from "next/dist/client/router";
import { useState } from 'react';




const MobileHeader = () => {
    const router = useRouter();
   
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    return (
       <div className="m-Gnb">
            <section>
                <Link href="/" as="/">
                    <a>
                        <h1>LOGO</h1>
                    </a>
                </Link>
                <button onClick={()=>toggleMenu()}>메뉴</button>
                <ul className={isOpen ? "hide-menu" : "show-menu"}> 
                        <Link href="/login" as="/login">
                            <a>
                                <li>Login</li>
                            </a>
                        </Link>
                        <li>3</li>
                        <li>4</li>
                </ul>
            </section>
       </div>
    );
}

export default MobileHeader;

