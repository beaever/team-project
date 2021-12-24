import Link from 'next/link'





const PcHeader = () => {



    return (
       <div className="Gnb">
           <div className="Gnb_inner">
                <ul>
                    <Link href="/" as="/">     
                            <a >
                                <h1>BOING GOING</h1>
                            </a>
                    </Link>
                    <ul>
                        <Link href="" as="">
                            <a >
                                <li className="bell-icon">종</li>
                            </a>
                        </Link>
                        <Link href="/admin" as="/admin">
                            <a>
                                <li>설정</li>
                            </a>
                        </Link>
                        <Link href="/login" as="/login">
                            <a>
                                <li className="aferNone">로그인</li>
                            </a>
                        </Link>
                    </ul>
                </ul>
           </div>
       </div>
    );
}

export default PcHeader;

