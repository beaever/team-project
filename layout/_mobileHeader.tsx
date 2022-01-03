import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HeaderModel from '../model/headerModel';

let prev_scroll_y = global.window && window.scrollY;

const MobileHeader = React.memo((props: HeaderModel) => {
	const { member, scroll_y } = props;
	const router = useRouter();

	const [is_hide, setIsHide] = useState<boolean>(false);

	useEffect(() => {
		if (scroll_y !== undefined && Math.abs(scroll_y - prev_scroll_y) > 16) {
			if (scroll_y <= 20) setIsHide(false);
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

	const onClickHome = () => {
		router.push('/');
	};

	const onClickAlert = () => {
		router.push('/alert');
	};

	const parseFilterSession = () => {
		let ss = sessionStorage.getItem('filter');

		try {
			ss = JSON.parse(ss);
		} catch {
			ss = null;
		}

		return ss;
	};

	return (
		<header className={`mobile_header ${is_hide ? 'hide' : ''}`}>
			<button onClick={onClickHome}>
				<img src="../icon/logo.svg" alt="뒤로가기 아이콘" />
			</button>
			<button onClick={onClickAlert}>
				<img
					src={
						member?.push_count > 0
							? '../icon/alarm_m_on.png'
							: '../icon/alarm_m_off.png'
					}
					alt="알람 아이콘"
				/>
			</button>
		</header>
	);
});

export default MobileHeader;
