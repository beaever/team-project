import React from 'react';
import useSignup from '../../hooks/useSignup';
import CheckBox from '../input/checkbox';
import MarginBottom from '../layout/margin-bottom';

const Agree = () => {
  const { form, setForm, signupLoading } = useSignup('signup');

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
    if (checked === true) {
      setForm({
        ...form,
        ['service']: 1,
        ['privacy']: 1,
        ['location_based']: 1,
        ['marketing']: 1,
      });
    } else {
      setForm({
        ...form,
        ['service']: 0,
        ['privacy']: 0,
        ['location_based']: 0,
        ['marketing']: 0,
      });
    }
  };

  const allcheck = () => {
    return form?.service && form?.privacy && form?.location_based && form?.marketing ? true : false;
  };

  return (
    <div id='agree' className='join-checkbox'>
      <ul className='terms_agree'>
        <li className={`all_agree ${allcheck() ? 'on' : ''}`}>
          <p className='fs-xl fw500 '>전체 동의</p>
          <CheckBox checked={allcheck()} id='all_agree' name='all_agree' onChange={checkedAllHandler} />
        </li>
        <MarginBottom margin={23} />
        <li>
          <p className='underline2'>
            <span className='requried'>*</span>만 14세 이상
          </p>
          <CheckBox onChange={checkedHandler} checked={!!form?.service} id='term1' name='age' value='age' className='reverse' />
        </li>
        <MarginBottom margin={15} />
        <li>
          <p className='underline2'>
            <span className='requried'>*</span>서비스 이용약관 동의
          </p>
          <CheckBox
            onChange={checkedHandler}
            checked={!!form?.location_based}
            id='term3'
            name='location_based'
            value='location_based'
            className='reverse'
          />
        </li>
        <MarginBottom margin={15} />
        <li>
          <p className='underline2'>
            <span className='requried'>*</span>개인정보 수집 · 이용 동의
          </p>
          <CheckBox onChange={checkedHandler} checked={!!form?.privacy} id='term2' name='privacy' value='privacy' className='reverse' />
        </li>
        <MarginBottom margin={15} />
        <li>
          <p className='underline2'>마케팅 정보 수신 동의</p>
          <CheckBox onChange={checkedHandler} checked={!!form?.marketing} id='term4' name='marketing' value='marketing' className='reverse' />
        </li>
      </ul>
    </div>
  );
};

export default Agree;
