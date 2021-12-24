import { useRouter } from 'next/dist/client/router';
import { useState } from "react";




const Find = () => {

    const router = useRouter();
    const [ activeIndex, setActiveIndex ] = useState(0);

    const [ telTerm , setTelTerm ] = useState('');


    const tabClickHandler = (index) => {
        setActiveIndex(index);
    };

    const IdStepGo = () => {
        router.push("/find/idStep");
    };

    const PassStepGo = () => {
        router.push("/find/passStep1");
    };
   

    const tabContArr=[
        {
            tabTitle:(
                <li className={activeIndex===0 ? "is-active tabs_select" : ""} onClick={()=>tabClickHandler(0)}> 이메일찾기 </li>
            ),
            tabCont:(
                <div className="id_findContainer"> 
                    <div className="find_inputcontainer">
                        <h3 className="find_h3_rig">필수입력항목</h3>
                        <div className="find_name"> 
                            <h3 className="find_h3_left">이름</h3>
                            <input type="text" placeholder="이름" />    
                        </div>
                        <div className="find_tell"> 
                           <h3 className="find_h3_left">휴대폰 번호</h3>
                           <input type="tel"  placeholder="휴대폰 인증번호"  />    
                           <button className="find_btn" type="button" >인증확인</button>                
                        </div>
                    </div>

                    <button className="find_submitBtn" type="submit" onClick={()=> IdStepGo()}>확인</button>
                </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active tabs_select" : ""} onClick={()=>tabClickHandler(1)}> 비밀번호 찾기 </li>
            ),
            tabCont:(
                <div> 
                    <div className="id_findContainer"> 
                        <div className="find_inputcontainer">
                            <h3 className="find_h3_rig">필수입력항목</h3>
                            <div className="find_name">
                                <h3 className="find_h3_left">이름</h3>
                                <input type="text" placeholder="이름" />
                            </div>  
                            <div className="find_tell"> 
                                <h3 className="find_h3_left">휴대폰번호</h3>
                                <input type="tel" placeholder="휴대폰 번호" />    
                                <button className="find_btn" type="button">인증번호발송</button>                
                            </div>
                        </div>

                        <button className="find_submitBtn" type="submit" onClick={()=> PassStepGo()}>확인</button>
                    </div>
                </div>
            )
        }
    ];
    return(
       <section className="findPage" >
            <div className="findContainer" >
                <ul className="tabs_boxed">
                    {tabContArr.map((section, index)=>{
                        return section.tabTitle
                    })}
                </ul>
                <div>
                    {tabContArr[activeIndex].tabCont}
                </div>
            </div>
       </section>
    );
}

export default Find;