import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import useLoginState from '../hooks/useLoginState';
import MarginBottom from '../components/layout/margin-bottom';

const PcHeader = () => {
  const router = useRouter();
  const { loginForm, setLoginForm } = useLoginState('load-login');
  const [drop, setDrop] = useState<boolean>(false);
  const drop_container_ref = useRef<HTMLDivElement>(null);

  const onClickLogout = () => {
    setLoginForm({
      ['login']: false,
    });
  };

  const clickProfile = () => {
    document.getElementsByName('profile')[0].click();
  };

  useEffect(() => {
    const contOutsideClickDetector = (e: MouseEvent) => {
      if (drop_container_ref.current?.contains(e.target as Node) === false) {
        setDrop(false);
      }
    };
    window.addEventListener('mousedown', contOutsideClickDetector);
    return () => {
      window.removeEventListener('mousedown', contOutsideClickDetector);
    };
  }, []);

  return (
    <header className='pc_header'>
      <Link href='/'>
        <a className='logo'>
          <img src='../icon/logo.svg' alt='' />
        </a>
      </Link>

      <div className='top_menu right_menu clearfix'>
        {loginForm && loginForm.login ? (
          <>
            <ul>
              <li>
                <Link href='/alert'>
                  <a>
                    <img src='../img/bell.svg' alt='알람이미지' />
                  </a>
                </Link>
              </li>
              <li>
                <div className='line' />
              </li>
              <li>
                <button
                  onClick={() => {
                    setDrop(!drop);
                  }}
                >
                  내정보
                </button>
              </li>
              <li>
                <div className='line' />
              </li>
              <li>
                <button onClick={onClickLogout}>로그아웃</button>
              </li>
            </ul>
          </>
        ) : (
          <>
            <li>
              <Link href='/login' as='/login'>
                로그인
              </Link>
            </li>
            <li>
              <div className='line' />
            </li>
            <li>
              <Link href='/join' as='/join'>
                회원가입
              </Link>
            </li>
          </>
        )}
      </div>

      {loginForm && loginForm?.login && (
        <div ref={drop_container_ref} className={`aside ${drop ? 'show' : ''}`} style={{ height: drop ? 'auto' : 0 }}>
          <div className='profile-wrap'>
            <div className='profile-img-wrap'>
              <div className='profile-img-holder'>
                <img src='../icon/noprofile.png' alt='프로필이미지' id='profile_img' />
              </div>
              <input type='file' style={{ display: 'none' }} name='profile' onChange={() => {}} />
              <button className='pencil-img-holder' onClick={clickProfile}>
                <img src='../icon/pencil.png' alt='프로필이미지수정아이콘' />
              </button>
            </div>
            <div className='text-wrap'>
              <div className='name-wrap'>
                <div className='name-company'>
                  <span className='name'>김진영</span>
                </div>
              </div>
              <div className='email-wrap'>
                <span>kjy@gmail.com</span>
              </div>
            </div>
          </div>

          <MarginBottom margin={20} />
          <div className='drop-list'>
            <Link href='/setting/mypage'>
              <a className='clearfix drop-item'>
                <span>마이페이지</span>
                <img src='../icon/arrow_right.png' alt='화살표아이콘' />
              </a>
            </Link>

            <Link href='/setting/chat'>
              <a className='clearfix drop-item'>
                <span>채팅</span>
                <img src='../icon/arrow_right.png' alt='화살표아이콘' />
              </a>
            </Link>

            <Link href='/inquiry'>
              <a className='clearfix drop-item'>
                <span>1:1문의</span>
                <img src='../icon/arrow_right.png' alt='화살표아이콘' />
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PcHeader;
