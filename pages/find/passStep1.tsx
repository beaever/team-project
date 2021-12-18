import { useRouter } from 'next/dist/client/router';

const PassStep1 = () => {
    const router = useRouter();
    const GoLogin = () => {
        router.push("/login")
    }
  return (
    <section className="findPage" >
        <div className="findContainer" > 
            <div className="passfind_containner">
            <h2 className="password_find_h2">비밀번호 재설정</h2>
                <h3>새로운 비밀번호</h3>
                <input type="text" placeholder="새로운 비밀번호" />
                <input type="text" placeholder="비밀번호 확인" />
            </div>
            <button className="find_p_submitBtn" onClick={()=> GoLogin()}>확인</button>
        </div>
    </section>
  );
}

export default PassStep1;