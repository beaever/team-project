import { useRouter } from 'next/dist/client/router';

const PassStep1 = () => {
    const router = useRouter();
    const GoLogin = () => {
        router.push("/login")
    }
  return (
    <section className="findPage" >
        <div className="findContainer">
        <div className="id_findContainer"> 
                        <h2 className="find_pass_h2">비밀번호 재설정</h2>
                        <div className="find_inputcontainer">
                            <h3 className="find_h3_rig">필수입력항목</h3>
                            <div className="find_name">
                                <h3 className="find_h3_left">새로운 비밀번호</h3>
                                <input type="text" placeholder="새로운 비밀번호" />
                            </div>  
                            <div className="find_name"> 
                                <h3 className="find_h3_left">비밀번호 확인</h3>
                                <input type="tel" placeholder="비밀번호 확인" />                
                            </div>
                        </div>
                        <button className="find_submitBtn" type="submit" onClick={()=> GoLogin()}>확인</button>
                    </div>
        </div>      
    </section>
  );
}

export default PassStep1;