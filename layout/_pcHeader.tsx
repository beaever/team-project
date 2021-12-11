import Link from 'next/link'





const PcHeader = () => {



    return (
       <div className="Gnb">
           <div className="Gnb_inner">
                <ul>
                    <Link href="/" as="/">     
                            <a >
                                <h1>LOGO</h1>
                            </a>
                    </Link>
                    <ul>
                        <Link href="" as="">
                            <a>
                                <li>좋아요</li>
                            </a>
                        </Link>
                        <Link href="/admin" as="/admin">
                            <a>
                                <li>MyPage</li>
                            </a>
                        </Link>
                        <Link href="/login" as="/login">
                            <a>
                                <li>Login</li>
                            </a>
                        </Link>
                    </ul>
                </ul>
           </div>
       </div>
    );
}

export default PcHeader;

