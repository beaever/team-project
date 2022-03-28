import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import InputText from '../../components/input/inputText';
import MarginBottom from '../../components/layout/margin-bottom';
import Button from '../../components/input/button';
import MobileHeader from '../../layout/_mobileHeader';
import PcHeader from '../../layout/_pcHeader';
import useWidth from '../../hooks/useWitdh';
import MobileFooter from '../../layout/_mobileFooter';
import Footer from '../../layout/_Footer';
import MarginTop from '../../components/layout/margin-top';
import useLoginState from '../../hooks/useLoginState';
import API from '../../service/api';
import UserGetKakaoProfileResponseDataModel from '../../model/kakao/user-kakao-reponse-data-mode';

declare const window: any;
declare const AppleID: any;
declare const Kakao: any;
declare const gapi: any;

const Login = () => {
  const router = useRouter();
  const { mediaQuery } = useWidth();
  const { setLoginForm } = useLoginState('load-login');
  // USESTATE
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validation, setValidation] = useState<boolean>(false);

  const onClickMove = (type: string) => {
    if (type === 'signup') {
      router.push('/join/df');
    } else if (type === 'kakao') {
      router.push('/join/ko');
    } else if (type === 'naver') {
      router.push('/join/nv/');
    }
  };

  // 로그인 API
  const onLogin = () => {
    API.user
      .Login({
        authId: '',
        email: email,
        password: password,
        loginType: 'D',
      })
      .then((res) => res.data)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          window.localStorage.setItem('access-token', res.data['access-token']);
          window.localStorage.setItem('refresh-token', res.data['refresh-token']);
        }
        router.push('/');
      });
  };

  const onClickLogin = () => {
    alert('로그인 완료');
    setLoginForm({
      ['login']: true,
    });
    router.push('/');
  };
  useEffect(() => {
    if (email?.length > 0 && password?.length > 0) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [email, password]);

  // KAKAO LOGIN
  const onClickKakaoLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!Kakao.isInitialized()) {
      Kakao.init(process.env.KAKAO_REST_KEY);
    }

    Kakao.Auth.loginForm({
      success: kakaoSuccess,
      fail: kakaoFail,
    });
  };

  // kakao
  const kakaoSuccess = async (res) => {
    // const token = res.access_token;
    // API.user.getKakaoProfile(token).then((res) => {
    // const data = res.data as UserGetKakaoProfileResponseDataModel;
    //  if (data?.code == 200) {
    //    const snsId = data?.data?.id ?? '';
    //    const snsEmail = data?.data.email ?? '';
    //    const snsNick = data?.data.nickname ?? '';
    //    const snsType = 'kk';
    //    if (snsId == '') return false;
    //     // setForm({ ...form, type: snsType, id: snsId, email: snsEmail, name: snsNick });
    //  } else {
    //    alert('!!!!!' + res);
    //  }
    // });
  };

  const kakaoSuccessAndroid = async (id: string, email: string, name: string) => {
    // if (id == '') return false;
    // setForm({ ...form, type: 'kk', id, name, email });
  };

  const kakaoFail = (error) => {
    // alert('실패');
    // console.log(error);
  };

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section id='login'>
        <div className='container'>
          <div id='login-title'>
            <h1>로그인</h1>
          </div>

          <InputText
            label='이메일'
            type='text'
            side_type='type1'
            value={email}
            placeholder='goingbuying@gmail.com'
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <MarginBottom margin={20} />
          <InputText
            label='비밀번호'
            type='password'
            side_type='type1'
            value={password}
            placeholder='*****'
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <MarginBottom margin={30} />
          <Button className='btn_login prime' disabled={!validation} label='로그인' onClick={() => onLogin()} marginBottom={10} />
          <Button className='btn_login siginup' span='signup' label=' 회원가입' onClick={() => onClickMove('signup')} />

          <Link href='/find'>
            <a className='to_find'>이메일/비밀번호 찾기</a>
          </Link>

          <div className='sns_container'>
            <div className='sns_title'>
              <div className='line'></div>
              <div className='guide'>
                <span>SNS 로그인 / 회원가입</span>
              </div>
            </div>
            <MarginBottom margin={22} />
            <div className='sns_wrap'>
              <Button className='kakao' label='카카오' img={true} src='icon/kakao.svg' onClick={() => alert('kakao')} marginBottom={10} />
              <Button className='naver' label=' 네이버' img={true} src='icon/naver.svg' onClick={() => alert('naver')} />
            </div>
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export default Login;
