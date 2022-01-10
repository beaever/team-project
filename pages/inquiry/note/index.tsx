import useWidth from '../../../hooks/useWitdh';
import MarginTop from '../../../components/layout/margin-top';
import MarginBottom from '../../../components/layout/margin-bottom';
import PcHeader from '../../../layout/_pcHeader';
import MobileHeader from '../../../layout/_mobileHeader';
import MobileFooter from '../../../layout/_mobileFooter';
import Footer from '../../../layout/_Footer';
import InputText from '../../../components/input/inputText';

const QuestionNote = () => {
  const { mediaQuery } = useWidth();

  return (
    <>
      {mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
      <MarginTop margin={100} />
      <section className='questionPage'>
        <div className='questionNoteContainer'>
          <h2 className='questionNote_h2'>1:1 문의하기</h2>
          <div>
            <h3 className='questionNote_h3'>문의 제목</h3>
            <input type='text' placeholder='문의사항 제목을 입력해주세요.' className='questionNote_input' />
          </div>
          <div>
            <h3 className='questionNote_h3'>문의 내용</h3>
            <textarea
              className='questionNote_textArea'
              placeholder='문의하실 사항을 입력해주세요! 디테일하게 입력하실 수록 정확하게 도움을 받으실 수 있어요! 최대500자 까지 작성이가능합니다.'
            />
          </div>
          <button className='questionNote_btn'>문의하기</button>
        </div>
      </section>
      <MarginBottom margin={100} />
      {mediaQuery === 'M' ? <MobileFooter now_location='home' /> : <Footer />}
    </>
  );
};

export default QuestionNote;
