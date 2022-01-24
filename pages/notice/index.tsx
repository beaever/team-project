import Link from 'next/link';
import { useState } from 'react';

import { useRouter } from 'next/router';
import React from 'react';
import MarginBottom from '../../components/layout/margin-bottom';
import MarginTop from '../../components/layout/margin-top';
import useWidth from '../../hooks/useWitdh';
import Footer from '../../layout/_Footer';
import MobileFooter from '../../layout/_mobileFooter';
import MobileHeader from '../../layout/_mobileHeader';
import PcHeader from '../../layout/_pcHeader';

interface NoticeListDataModel {
  idx: number;
  title: string;
}

const Notice = () => {
  const { mediaQuery } = useWidth();
  const [noticeList, setNoticeList] = useState<NoticeListDataModel[]>([
    {
      idx: 1,
      title: '2022 공지사항입니다.',
    },
    {
      idx: 2,
      title: '2022 공지사항입니다.1',
    },
    {
      idx: 3,
      title: '2022 공지사항입니다.2',
    },
    {
      idx: 4,
      title: '2022 공지사항입니다.3',
    },
    {
      idx: 5,
      title: '2022 공지사항입니다.4',
    },
    {
      idx: 6,
      title: '2022 공지사항입니다.',
    },
    {
      idx: 7,
      title: '2022 공지사항입니다.1',
    },
    {
      idx: 8,
      title: '2022 공지사항입니다.2',
    },
    {
      idx: 9,
      title: '2022 공지사항입니다.3',
    },
    {
      idx: 10,
      title: '2022 공지사항입니다.4',
    },
    {
      idx: 11,
      title: '2022 공지사항입니다.',
    },
    {
      idx: 12,
      title: '2022 공지사항입니다.1',
    },
    {
      idx: 13,
      title: '2022 공지사항입니다.2',
    },
    {
      idx: 14,
      title: '2022 공지사항입니다.3',
    },
    {
      idx: 15,
      title: '2022 공지사항입니다.4',
    },
    {
      idx: 16,
      title: '2022 공지사항입니다.',
    },
    {
      idx: 17,
      title: '2022 공지사항입니다.1',
    },
    {
      idx: 18,
      title: '2022 공지사항입니다.2',
    },
    {
      idx: 19,
      title: '2022 공지사항입니다.3',
    },
    {
      idx: 20,
      title: '2022 공지사항입니다.4',
    },
  ]);

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={150} />
      <section className='noticePage'>
        <h2 className='noticePage_h2'>공지사항</h2>
        <MarginBottom margin={100} />
        <div className='noticeContainer'>
          <div>
            <ul className='notice_ul'>
              {noticeList?.map((item) => {
                return (
                  <>
                    <Link href='/notice/board' as='/notice/board'>
                      <a>
                        <li key={item.idx}>{item.title}</li>
                      </a>
                    </Link>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <MarginBottom margin={80} />
        {noticeList.length > 10 && (
          <button>
            <img src='icon/plus.svg' alt='plus' /> 더보기
          </button>
        )}
      </section>
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export default Notice;
