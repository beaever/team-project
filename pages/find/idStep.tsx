import { useRouter } from 'next/dist/client/router';


const IdStep = () => {


    const router = useRouter();


    const GoLogin = () => {
        router.push("/login");
    }
    

  return(
    <section className="findPage" >
    <div className="findContainer" >
       <div className="idStepContainer">
            <h2> LOGO </h2>
            <span>귀하의 이메일은 홍길동@gmail.com 입니다.</span>
           <div className="idStep_btnBox">
                <button className="idStep_btn" onClick={()=> GoLogin()}>로그인</button>
                <button className="idStep_btn">비밀번호 찾기</button>
           </div>
       </div>
    </div>
</section>
  );
}

export default IdStep;