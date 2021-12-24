import { useRouter } from 'next/dist/client/router';

const JoinStep2 = () => {
    const router = useRouter();
    const onClick = () => {
			router.push('/');
	};

  return (
    <>
        <section className="JoinPage">
            <div className="Join_Container">
            <h2>회원가입 완료 페이지</h2>
            <button onClick={()=>onClick()}>메인페이지로 이동하기</button>
            </div>
        </section>
    </>
  );
}

export default JoinStep2;