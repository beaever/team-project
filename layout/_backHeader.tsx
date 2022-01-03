import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getQuery } from '../shared/function';
import HeaderModel from '../model/headerModel';

let prev_scroll_y = global.window && window.scrollY;

const BackHeader = React.memo((props: HeaderModel) => {
	const { title, is_lock, scroll_y, right_button } = props;
	const router = useRouter();
	const [is_hide, setIsHide] = useState<boolean>(false);

	const onClickBack = () => {
		const returnURI = router.asPath ? getQuery(router.asPath).rt : '';
		if (returnURI) router.replace(decodeURIComponent(returnURI));
		else router.back();
	};

	useEffect(() => {
		if (is_lock) return;

		if (scroll_y !== undefined && Math.abs(scroll_y - prev_scroll_y) > 10) {
			if (scroll_y <= 0) setIsHide(false);
			else if (
				document.querySelector('#wemac-root')!.clientHeight -
					window.innerHeight <=
				scroll_y
			) {
				setIsHide(true);
			} else if (scroll_y > prev_scroll_y) setIsHide(true);
			else if (scroll_y < prev_scroll_y) setIsHide(false);
			prev_scroll_y = scroll_y;
		}
	}, [scroll_y]);

	return (
		<>
			<header className={`back_header ${is_hide ? 'hide' : ''}`}>
				<h1>{title}</h1>
				<button onClick={onClickBack}>
					<img src="icon/arrow_left.png" alt="뒤로가기 아이콘" />
				</button>
				{right_button ?? ''}
			</header>
		</>
	);
});

export default BackHeader;
