import MarginBottom from '../../../components/layout/margin-bottom';
import MarginTop from '../../../components/layout/margin-top';
import useWidth from '../../../hooks/useWitdh';
import Footer from '../../../layout/_Footer';
import MobileFooter from '../../../layout/_mobileFooter';
import MobileHeader from '../../../layout/_mobileHeader';
import PcHeader from '../../../layout/_pcHeader';

interface QuestionListDataModel {
  idx: number;
  title: string;
}

const QuestionBoard = () => {
  const { mediaQuery } = useWidth();

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section className='questionPage'>
        <div className='questionBoardContainer'>
          <div className='questionBoard_top'>
            <h2 className='questionBoard_top_h2'>1:1문의 제목이 전부 노출 됩니다.</h2>
            <span className='questionBoard_top_span'>답변완료</span>
            <span>날짜</span>
          </div>
          <div className='questionBoard_queBox'>문의내용</div>
          <div className='questionBoard_textBox'>
            <h3 className='questionBoard_h3'>답변내용</h3>
            <span>
              1:1 문의 답변 1:1 문의 답변 1:1 문의 답변 1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변 1:1 문의 답변 1:1 문의 답변 1:1 문의 답변
              1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변 1:1 문의 답변1:1 문의 답변1:1
              문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변 1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의
              답변1:1 문의 답변1:1 문의 답변 1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의
              답변1:1 문의 답변1:1 문의 1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1
              문의 답변 1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변 1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의 답변1:1 문의
              답변1:1 문의 답변
            </span>
          </div>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
    </>
  );
};

export default QuestionBoard;
