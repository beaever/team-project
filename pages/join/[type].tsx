import React from 'react';
import { useRouter } from 'next/dist/client/router';
import useInput from '../../hooks/useInput';
import { useState, useEffect } from 'react';
import CheckBox from '../../components/input/checkbox';

import useWidth from '../../hooks/useWitdh';
import MarginTop from '../../components/layout/margin-top';
import MarginBottom from '../../components/layout/margin-bottom';
import PcHeader from '../../layout/_pcHeader';
import MobileHeader from '../../layout/_mobileHeader';
import MobileFooter from '../../layout/_mobileFooter';
import Footer from '../../layout/_Footer';
import InputText from '../../components/input/inputText';
import Agree from '../../components/join/agree';
import Button from '../../components/input/button';

import { GetServerSideProps } from 'next';
import Axios from 'axios';
import API from '../../service/api';
import { join } from 'path/posix';
import axios from 'axios';
import UserMemberSingupRequestDataModel from '../../service/api/user/model/user-member-singup-request-data-model';

let authCount = 0;
const Join = (props: any) => {
  const router = useRouter();
  const { mediaQuery } = useWidth();
  const query = router.query.type;
  const [checkPhoneNumber, setCheckPhoneNumber] = useState<string>('');
  const [validTimer, setValidTimer] = useState<boolean>(false); // Validation Time
  const [validCount, setValidCount] = useState<number>(-1); // Validation
  const [validation, setValidation] = useState<boolean>(true);
  const [status, setStatus] = useState(0);

  // email , password , nickname , phone
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passCofirm, setPassCofirm] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [auth, setAuth] = useState<string>('');

  // error message
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passCofirmMessage, setPassCofirmMessage] = useState<string>('');
  const [nameMessage, setNameMessage] = useState<string>('');
  const [nicknameMessage, setNicknameMessage] = useState<string>('');
  const [errSingup, setErrSignup] = useState<boolean>(false);
  const [PhoneMessage, setPhoneMessage] = useState<string>('');

  // ????????? ??????
  const onValidationCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    const value = (e.currentTarget.value as string) ?? '';
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/;
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (id === 'join-email') {
      setEmail(value);
      if (value === '') {
        setEmailMessage('???????????? ??????????????????.');
        setValidation(!validation);
      } else if (!emailRegex.test(value)) {
        setEmailMessage('????????? ????????? ?????? ????????????.');
        setValidation(!validation);
      } else {
        setValidation(validation);
        setEmailMessage('');
        getCheckEmailMessage(email);
      }
    } else if (id === 'join-password') {
      setPassword(value);
      if (value === '') {
        setPassword(value);
        setPasswordMessage('??????????????? ??????????????????.');
      } else if (!passwordRegex.test(value)) {
        setPasswordMessage('??????????????? 6 ~ 20 ????????? ??????????????? ???????????? ??????????????????');
        setValidation(!validation);
      } else {
        setPasswordMessage('');
      }
    } else if (id === 'join-password2') {
      setPassCofirm(value);
      if (password === value) {
        setPassCofirmMessage('');
        setValidation(!validation);
      } else {
        setPassCofirmMessage('??????????????? ???????????? ????????????.');
        setValidation(validation);
      }
    } else if (id === 'join-name') {
      setUsername(value);
      if (value.length < 2 || value.length > 5) {
        setNameMessage('2?????? ?????? 5?????? ???????????? ??????????????????.');
        setValidation(!validation);
      } else if (value.length <= 0) {
        setNameMessage('???????????? ??????????????????.');
        setValidation(!validation);
      } else {
        setNameMessage('');
        setValidation(validation);
      }
    } else if (id === 'join-nickname') {
      setNickname(value);
      if (value.length < 2 || value.length > 8) {
        setNicknameMessage('2?????? ?????? 8?????? ???????????? ??????????????????.');
        setValidation(!validation);
      } else if (value <= '') {
        setNicknameMessage('???????????? ??????????????????.');
        setValidation(!validation);
      } else {
        setNicknameMessage('');
        getCheckNicknameMessage(nickname);
        setValidation(validation);
      }
    } else if (id === 'join-phone') {
      setPhone(value);
      if (value <= '') {
        setPhoneMessage('??????????????? ??????????????????.');
        setValidation(!validation);
      } else if (!regPhone.test(value)) {
        setPhoneMessage('????????? ?????? ????????????.');
        setValidation(!validation);
      } else {
        // ????????? api ?????? ?????? ????????? ????????? ????????? ????????????
        setPhoneMessage('');
      }
    } else {
      setValidation(validation);
    }
  };

  const Signup = () => {
    API.user
      .Signup({
        adultOk: true,
        authId: auth,
        collectionOfMarketingInfoOk: true,
        collectionOfPersonalInfoOk: true,
        email: email,
        nickname: nickname,
        password: password,
        phoneNum: phone,
        serviceOk: true,
        snsType: 'D',
        username: username,
      })
      .then((res) => {
        if (validation) {
          window.localStorage.setItem('signupResponseData', JSON.stringify(res.data));
          router.push('/join/complete');
          console.log(res);
        }
      })
      .catch((error) => {
        //????????? ????????? ?????? ????????? ?????? ?????????
        console.log(error);
      });
  };

  //
  //?????????
  //then ????????? ????????? ??????
  //????????? ??????????????? ??????????????? ??????????????? ????????????
  // if(res.data === 400) ??????????????? ??????????????? ????????? ????????? ????????? ????????? ????????????.

  const onClickPhoneAuth = () => {
    authCount++;
    setStatus(1);
  };

  const stateChange = () => {
    if (status === 0) {
      if (checkPhoneNumber === '') {
        // ????????? ?????? API Function
        onClickPhoneAuth();
      }
      setValidCount(180); //------ ???????????? ?????? ???????????? // 3???
      setValidTimer(true);
    } else if (status === 1) {
      onClickResend();
      if (authCount < 3) {
        setValidCount(180); //------- ???????????? ?????? ???????????? // 3???
        setValidTimer(true); //------ ???????????? ?????? ????????? on/off
        setValidation(true); //------ ????????? ?????? validation
      }
    } else if (status === 2) {
      setStatus(0);
    }
  };

  // ???????????? ?????????
  const onClickResend = () => {
    if (authCount < 3) {
      // ????????? ?????? API Function
    } else {
      alert('??????????????? ???????????? ?????? 3??? ???????????????.');
    }
  };

  // AuthTimer
  const authtimmer = () => {
    if (validCount > 0) {
      return `?????? ?????? : ${parseInt('' + validCount / 60)}???
				${validCount % 60 < 10 ? '0' + (validCount % 60) : validCount % 60}???`;
    } else {
      return '??????????????? ?????? ???????????????.';
    }
  };

  // ???????????? ???????????? TIMER
  useEffect(() => {
    if (!validTimer) return undefined;
    const vTick = setTimeout(() => {
      if (validCount > 0) {
        setValidCount(validCount - 1);
        setValidation(true);
      } else {
        setValidTimer(false);
        setValidation(false);
      }
    }, 1000);
    return () => {
      clearTimeout(vTick);
    };
  }, [validCount]);

  // ????????? ?????? API
  const getCheckEmailMessage = (checkEmail: string) => {
    API.user
      .checkEmail({ email: checkEmail })
      .then((res) => {
        const data = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ????????? ?????? API
  const getCheckNicknameMessage = (checkNickname: string) => {
    API.user
      .checkNickname({ nickname: checkNickname })
      .then((res) => {
        const data = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    console.log(query);
  }, []);

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={160} />
      <section id='join'>
        <div className='join-container'>
          <h2 className='join-title'>????????????</h2>
          <p className='join-text right'>
            <span className='required'>*</span>??????????????????
          </p>
          <MarginBottom margin={1} />
          <div>
            <InputText
              required
              label='?????????'
              id='join-email'
              type='text'
              placeholder='goingbuying@gmail.com'
              error={emailMessage.length > 0 && emailMessage}
              value={email}
              onChange={(e) => onValidationCheck(e)}
            />
          </div>
          <MarginBottom margin={27} />
          <div>
            <InputText
              required
              label='????????????'
              id='join-password'
              type='password'
              placeholder='**********'
              value={password}
              error={password.length < 8 && passwordMessage}
              onChange={(e) => onValidationCheck(e)}
            />
          </div>

          <MarginBottom margin={10} />
          <div>
            <InputText
              id='join-password2'
              type='password'
              placeholder='**********'
              // error={'??????????????? ?????? ?????? ????????????.'}
              value={passCofirm}
              error={passCofirm.length > 0 && passCofirmMessage}
              onChange={(e) => onValidationCheck(e)}
            />
          </div>
          <MarginBottom margin={27} />
          <div>
            <InputText
              required
              label='??????'
              id='join-name'
              type='text'
              placeholder='????????????'
              value={username}
              onChange={(e) => onValidationCheck(e)}
              error={username.length > 0 && nameMessage}
            />
            {}
          </div>
          <MarginBottom margin={10} />
          <div>
            <InputText
              required
              label='?????????'
              id='join-nickname'
              type='text'
              placeholder='?????????'
              value={nickname}
              onChange={(e) => onValidationCheck(e)}
              error={nickname.length > 0 && nicknameMessage}
            />
          </div>
          <MarginBottom margin={27} />
          <div>
            <InputText
              required
              label='???????????????'
              id='join-phone'
              type='text'
              placeholder='010-1234-5678'
              max_length={13}
              value={phone}
              onChange={(e) => onValidationCheck(e)}
              error={phone.length > 0 && PhoneMessage}
              side_type='type1'
              side={
                <>
                  {phone?.length >= 11 ? (
                    <button type='button' className='second' onClick={stateChange}>
                      {status === 1 ? '?????????' : status === 2 ? '??????' : '???????????? ??????'}
                    </button>
                  ) : (
                    <button type='button' className='inactive' onClick={stateChange}>
                      ???????????? ??????
                    </button>
                  )}
                </>
              }
            />
            {status === 1 && (
              <>
                <MarginBottom margin={10} />
                <InputText
                  name='auth'
                  type='text'
                  value={auth}
                  side_type='type1'
                  side={
                    <>
                      <button type='button' className={status === 1 ? `confirm` : 'inactive'} onClick={() => {}}>
                        ????????????
                      </button>
                    </>
                  }
                  error={`${authtimmer()}`}
                  onChange={(e) => setAuth(e.currentTarget.value)}
                  disabled={validation ? false : true}
                />
              </>
            )}
          </div>
          <div>
            <Agree props={props} />
          </div>
          <MarginBottom margin={10} />
          <div className='join-btn'>
            <Button className={`btn-join disabled`} label=' ????????????' onClick={() => Signup()} />
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const EmailCheck = async () => {
    const EmailApi = `http://3.37.125.107/api/v1/auth/check-email`;
    const res = await Axios.post(EmailApi);
    const data = res.data;
    console.log(data);
  };
  return { props: { type: context.query.type } };
};

export default Join;
