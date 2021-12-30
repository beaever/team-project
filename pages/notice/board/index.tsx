import React from 'react';
import useWidth from '../../../hooks/useWitdh';
import MarginTop from '../../../components/layout/margin-top';
import MarginBottom from '../../../components/layout/margin-bottom';
import PcHeader from '../../../layout/_pcHeader';
import MobileHeader from '../../../layout/_mobileHeader';
import MobileFooter from '../../../layout/_mobileFooter';
import Footer from '../../../layout/_Footer';

const Board = () => {
	const { mediaQuery } = useWidth();

	return (
		<>
			{mediaQuery === 'M' ? <MobileHeader /> : <PcHeader />}
			<MarginTop margin={100} />
			<section className="notice_boardPage">
				<div className="boardContainer">
					<h3 className="board_title">22년 공지사항입니다.</h3>
					<span className="board_day">day</span>
					<div className="board_textArey">
						<p>
							공지사항 내용이 이런식으로 이렇게 저렇게 들어갑니다 이렇게 저렇게
							들어갑니다. 감사합니다 즐거운 하루되세요 :) 공지사항 내용이
							이런식으로 이렇게 저렇게 들어갑니다 이렇게 저렇게 들어갑니다.
							감사합니다 즐거운 하루되세요 :) 공지사항 내용이 이런식으로 이렇게
							저렇게 들어갑니다 이렇게 저렇게 들어갑니다. 감사합니다 즐거운
							하루되세요 :) 공지사항 내용이 이런식으로 이렇게 저렇게 들어갑니다
							이렇게 저렇게 들어갑니다. 감사합니다 즐거운 하루되세요 :) 공지사항
							내용이 이런식으로 이렇게 저렇게 들어갑니다 이렇게 저렇게
							들어갑니다. 감사합니다 즐거운 하루되세요 :)
						</p>
					</div>
				</div>
			</section>
			<MarginBottom margin={100} />
			{mediaQuery === 'M' ? <MobileFooter /> : <Footer />}
		</>
	);
};

export default Board;
