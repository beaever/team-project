import MarginBottom from '../../components/layout/margin-bottom';
import MarginTop from '../../components/layout/margin-top';
import useWidth from '../../hooks/useWitdh';
import Footer from '../../layout/_Footer';
import MobileFooter from '../../layout/_mobileFooter';
import MobileHeader from '../../layout/_mobileHeader';
import PcHeader from '../../layout/_pcHeader';

import Link from 'next/link';
import { useState } from 'react';

interface QuestionListDataModel {
  idx: number;
  title: string;
}

const Question = () => {
  const { mediaQuery } = useWidth();

  const [questionList, setquestionList] = useState<QuestionListDataModel[]>([
    {
      idx: 1,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 2,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 3,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 4,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 5,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 6,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 7,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 8,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 9,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 10,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 11,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 12,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 13,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 14,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 15,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 16,
      title: 'GOING BUYING 관련 문의입니다.',
    },
    {
      idx: 17,
      title: 'GOING BUYING 관련 문의입니다.',
    },
  ]);

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section className='questionPage'>
        <div className='questionContainer'>
          <h2 className='question_h2'>1:1문의</h2>
          <div>
            <ul className='question_ul'>
              {questionList?.map((item) => {
                return (
                  <Link href='/inquiry/board' as='/inquiry/board'>
                    <a>
                      <li className='question_li' key={item.idx}>
                        {item.title}
                      </li>
                    </a>
                  </Link>
                );
              })}
            </ul>
            {questionList.length > 10 && <button className='question_button'> + 더보기</button>}
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter now_location='home' /> : <Footer />}
    </>
  );
};

export default Question;
