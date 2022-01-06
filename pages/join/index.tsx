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

let authCount = 0;
const Join = () => {
  const router = useRouter();
  const { mediaQuery } = useWidth();
  const [phone, setPhone] = useState<string>('');
  const [checkPhoneNumber, setCheckPhoneNumber] = useState<string>('');
  const [validTimer, setValidTimer] = useState<boolean>(false); // Validation Time
  const [validCount, setValidCount] = useState<number>(-1); // Validation
  const [validation, setValidation] = useState<boolean>(true);
  const [status, setStatus] = useState(0);

  const onBlurValidCheck = (e: React.FocusEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    const value = (e.currentTarget.value as string) ?? '';
    if (id === 'id') {
      if (value === '') {
        alert('이메일을 입력해주세요.');
      }
    } else if (id === 'password') {
      if (value === '') {
        alert('비밀번호를 입력해주세요.');
      } else if (value.length < 6) {
        alert('비밀번호는 6 ~ 20 사이로 설정해주세요.');
      }
    }
  };

  const onClickSuccess = () => {
    router.push('/join/complete');
  };

  const onClickPhoneAuth = () => {
    authCount++;
    setStatus(1);
  };

  const stateChange = () => {
    if (status === 0) {
      if (checkPhoneNumber === '') {
        // 휴대폰 인증 API Function
        onClickPhoneAuth();
      }
      setValidCount(180); //------ 인증번호 체크 유효시간 // 3분
      setValidTimer(true);
    } else if (status === 1) {
      onClickResend();
      if (authCount < 3) {
        setValidCount(180); //------- 인증번호 체크 유효시간 // 3분
        setValidTimer(true); //------ 인증번호 체크 타이머 on/off
        setValidation(true); //------ 유효성 검사 validation
      }
    } else if (status === 2) {
      setStatus(0);
    }
  };

  // 인증번호 재발송
  const onClickResend = () => {
    if (authCount < 3) {
      // 휴대폰 인증 API Function
    } else {
      alert('휴대폰인증 재발송은 최대 3회 가능합니다.');
    }
  };

  // AuthTimer
  const authtimmer = () => {
    if (validCount > 0) {
      return `남은 시간 : ${parseInt('' + validCount / 60)}분
				${validCount % 60 < 10 ? '0' + (validCount % 60) : validCount % 60}초`;
    } else {
      return '인증시간이 만료 되었습니다.';
    }
  };

  // 인증번호 유효시간 TIMER
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

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={160} />
      <section id='join'>
        <div className='join-container'>
          <h2 className='join-title'>회원가입</h2>
          <p className='join-text right'>
            <span className='required'>*</span>필수입력항목
          </p>
          <MarginBottom margin={1} />
          <div>
            <InputText required label='이메일' id='join-email' type='text' placeholder='goingbuying@gmail.com' error={'등록된 이메일 주소 입니다.'} />
          </div>
          <MarginBottom margin={27} />
          <div>
            <InputText required label='비밀번호' id='join-password1' type='password' placeholder='**********' />
          </div>
          <MarginBottom margin={10} />
          <div>
            <InputText id='join-password2' type='password' placeholder='**********' error={'비밀번호가 일치 하지 않습니다.'} />
          </div>
          <MarginBottom margin={27} />
          <div>
            <InputText required label='이름' id='join-name' type='text' placeholder='고잉바잉' />
          </div>
          <MarginBottom margin={10} />
          <div>
            <InputText required label='닉네임' id='join-nickname' type='text' placeholder='닉네임' />
          </div>
          <MarginBottom margin={27} />
          <div>
            <InputText
              required
              label='휴대폰번호'
              id='join-phone'
              type='text'
              placeholder='010-1234-5678'
              max_length={13}
              value={phone}
              side_type='type1'
              side={
                <>
                  {phone?.length >= 11 ? (
                    <button type='button' className='second' onClick={stateChange}>
                      {status === 1 ? '재발송' : status === 2 ? '수정' : '인증번호 받기'}
                    </button>
                  ) : (
                    <button type='button' className='inactive' onClick={stateChange}>
                      인증번호 받기
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
                  side_type='type1'
                  side={
                    <>
                      <button type='button' className={status === 1 ? `confirm` : 'inactive'} onClick={() => {}}>
                        인증확인
                      </button>
                    </>
                  }
                  error={`${authtimmer()}`}
                  onChange={(e) => {}}
                  disabled={validation ? false : true}
                />
              </>
            )}
          </div>
          <div>
            <Agree />
          </div>
          <MarginBottom margin={10} />
          <div className='join-btn'>
            <Button className={`btn-join disabled`} label=' 회원가입' onClick={onClickSuccess} />
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};
export default Join;
