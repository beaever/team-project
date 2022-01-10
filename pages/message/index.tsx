import { title } from 'process';
import { ReactEventHandler, useEffect, useState } from 'react';
import MarginBottom from '../../components/layout/margin-bottom';
import MarginTop from '../../components/layout/margin-top';
import useWidth from '../../hooks/useWitdh';
import Footer from '../../layout/_Footer';
import MobileFooter from '../../layout/_mobileFooter';
import MobileHeader from '../../layout/_mobileHeader';
import PcHeader from '../../layout/_pcHeader';
import Link from 'next/link';

interface MessageListDataModel {
  idx: number;
  name: string;
  title: string;
}

const Message = () => {
  const { mediaQuery } = useWidth();
  const messageContArr = [{}];

  const [messageList, setMessageList] = useState<MessageListDataModel[]>([
    {
      idx: 1,
      name: '홍길동',
      title: '상품 문의드립니다',
    },
    {
      idx: 2,
      name: '고길동',
      title: '고드름 문의드립니다',
    },
    {
      idx: 3,
      name: '나루토',
      title: '표창 문의드립니다',
    },
    {
      idx: 4,
      name: '김삼식',
      title: '상품 문의드립니다',
    },
    {
      idx: 5,
      name: '최무식',
      title: '상품 문의드립니다',
    },
    {
      idx: 6,
      name: '동동',
      title: '상품 문의드립니다',
    },
    {
      idx: 7,
      name: '동구동',
      title: '상품 문의드립니다',
    },
    {
      idx: 8,
      name: '동구동',
      title: '상품 문의드립니다',
    },
  ]);

  const [isMessage, setIsMessage] = useState(false);

  const onMessage = (e: ReactEventHandler) => {};
  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}

      <section className='messagePage'>
        {messageList?.map((item) => {
          return (
            <div className='messageContainer'>
              <Link href='/' as='/'>
                <a className='message_a'>
                  <li className='message_li' key={item.idx}>
                    <img src='../img/prof.svg' alt='' />
                    <div className='message_info'>
                      <div className='message_nameBox'>
                        <h3>{item.name}</h3>
                        <p>시간</p>
                      </div>
                      <div className='message_Contents'>
                        <p className='message_qus'>상품문의 드립니다</p>
                        <button></button>
                      </div>
                    </div>
                  </li>
                </a>
              </Link>
            </div>
          );
        })}
        {messageList.length > 7 && <button className='question_button'> + 더보기</button>}
        <div className='message_notContainer'>
          <img src='../img/원느낌표.svg' alt='' />
          <p>최근메세지 내역이 없습니다!</p>
        </div>
      </section>
      {mediaQuery === 'M' ? <MobileFooter now_location='home' /> : <Footer />}
    </>
  );
};

export default Message;
