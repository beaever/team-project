import  Axios  from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";


const Admin = () => {
  const router = useRouter();
  const [islogin, setLogin] = useState<boolean>(false);
  function checkLogin() {
      Axios.get("/api/isLogin")
      .then((res)=> {
          if (res.status === 200 && res.data.name ){
              // 로그인
                setLogin(true);
          } else {
              // 로그인 안됨
              router.push("/login");
          }
      })
  }
  useEffect(() => {
      checkLogin();
  },[]);
  return (
      <>
       <div>MyPage</div>
       {islogin && <button>logout</button>}
      </>
  )
}

export default Admin;