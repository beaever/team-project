import Link from 'next/link'
import { useRouter } from "next/dist/client/router";




const PcHeader = () => {

    const router = useRouter();

    return (
       <div className="Gnb">
            <ul>
                <Link href="/" as="/">
                    <a>
                        <h1>LOGO</h1>
                    </a>
                </Link>
                <ul>
                    <Link href="" as="">
                        <a>
                            <li>좋아요</li>
                        </a>
                    </Link>
                    <Link href="" as="">
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
    );
}

export default PcHeader;

