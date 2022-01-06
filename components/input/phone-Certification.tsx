import React, { useEffect, useState } from 'react';
import MarginBottom from '../layout/margin-bottom';
import InputText from './inputText';

interface PhoneCertifycationModel {
  required: boolean;
}

let authCount = 0;
const PhoneCertification = (props: PhoneCertifycationModel) => {
  // useState
  const [phone, setPhone] = useState<string>('');
  const [checkPhoneNumber, setCheckPhoneNumber] = useState<string>('');
  const [validTimer, setValidTimer] = useState<boolean>(false); // Validation Time
  const [validCount, setValidCount] = useState<number>(-1); // Validation
  const [validation, setValidation] = useState<boolean>(true);
  const [status, setStatus] = useState(0);

  // Function
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
      <InputText
        required={props.required ? true : false}
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
    </>
  );
};

export default PhoneCertification;
