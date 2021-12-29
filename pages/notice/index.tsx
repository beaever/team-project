import Link from 'next/link';
import { useState } from 'react';

interface NoticeListDataModel {
	idx: number;
	title: string;
}

const Notice = () => {
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
	]);

	return (
		<section className="noticePage">
			<div className="noticeContainer">
				<h2>공지사항</h2>
				<div>
					<ul className="notice_ul">
						{noticeList?.map((item) => {
							return (
								<>
									<Link href="/" as="">
										<a>
											<li key={item.idx}>{item.title}</li>
										</a>
									</Link>
								</>
							);
						})}
					</ul>
					{noticeList.length > 10 && <button> + 더보기</button>}
				</div>
			</div>
		</section>
	);
};

export default Notice;
