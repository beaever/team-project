import React, { useState } from 'react';
import useSignup from '../../hooks/useSignup';
import CheckBox from '../input/checkbox';
import MarginBottom from '../layout/margin-bottom';

const Agree = () => {
  const [form, setForm] = useState({
    all: false,
    age: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  const checkedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = e.currentTarget.name;
    const checked = e.currentTarget.checked;
    setForm({
      ...form,
      [n]: checked ? 1 : 0,
    });
  };

  const checkedAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    let v = e.currentTarget.value;
  };

  const allcheck = () => {
    return form?.service && form?.privacy && form?.age && form?.marketing ? true : false;
  };

  return (
    <div id='agree' className='join-checkbox'>
      <ul className='terms_agree'>
        <li className={`all_agree ${allcheck() ? 'on' : ''}`}>
          <p className='fs-xl fw500 '>전체 동의</p>
          <CheckBox checked={allcheck()} id='all' name='all' onChange={checkedAllHandler} />
        </li>
        <li>
          <p>
            <span className='required'>*</span>만 14세 이상
          </p>
          <CheckBox onChange={checkedHandler} checked={!!form?.age} id='age' name='age' value='age' className='reverse' />
        </li>
        <li>
          <p>
            <span className='required'>*</span>서비스 이용약관 동의
          </p>
          <CheckBox onChange={checkedHandler} checked={form?.service} id='term3' name='service' value='service' className='reverse' />
        </li>
        <li>
          <p>
            <span className='required'>*</span>개인정보 수집 · 이용 동의
          </p>
          <CheckBox onChange={checkedHandler} checked={form?.privacy} id='privacy' name='privacy' value='privacy' className='reverse' />
        </li>
        <li>
          <p>마케팅 정보 수신 동의</p>
          <CheckBox onChange={checkedHandler} checked={form?.marketing} id='marketing' name='marketing' value='marketing' className='reverse' />
        </li>
      </ul>
    </div>
  );
};

export default Agree;
