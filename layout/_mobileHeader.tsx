import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HeaderModel from '../model/headerModel';

const logo = require('../static/img/logo.png');
const alarmMOff = require('../static/img/icons/alarm_m_off.png');
const alarmMOn = require('../static/img/icons/alarm_m_on.png');
const filter_icon = require('../static/img/icons/filter.png');

let prev_scroll_y = global.window && window.scrollY;

const MobileHeader = React.memo((props: HeaderModel) => {
	const {
		member,
		scroll_y,
		filter_btn_is_render,
		filter_type,
		filter_data,
		filter_click,
	} = props;

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

	const onClickFilter = () => {
		const fd = filter_data as any;
		let ft = filter_type == 1 ? 1 : 0;

		let s = '';
		if (ft === 1) {
			s += 'p=' + (fd?.pFilter?.p_model_type ?? 'A') + '&';
			s +=
				'l=' +
				(fd?.pFilter?.p_locale ? fd?.pFilter?.p_locale.join(',') : 'A') +
				'&';
			s +=
				'c=' +
				(fd?.pFilter?.p_categoty ? fd?.pFilter?.p_categoty.join(',') : 'A') +
				'&';
			s += 's=' + (fd?.pFilter?.p_studio ?? 'A') + '&';
		} else {
			s += 'p=' + (fd?.mFilter?.m_model_type ?? 'A') + '&';
			s +=
				'l=' +
				(fd?.mFilter?.m_locale ? fd?.mFilter?.m_locale.join(',') : 'A') +
				'&';
			s +=
				'c=' +
				(fd?.mFilter?.m_categoty ? fd?.mFilter?.m_categoty.join(',') : 'A') +
				'&';
			s += 'g=' + (fd?.mFilter?.m_gender ?? 'A') + '&';
		}

		s = s.substr(0, s.length - 1);

		const sessionData = parseFilterSession() as any;

		const mFilter = sessionData?.mFilter ? sessionData.mFilter : null;
		const pFilter = sessionData?.pFilter ? sessionData.pFilter : null;

		sessionStorage.setItem(
			'filter',
			JSON.stringify({ indicator: ft, mFilter, pFilter }),
		);

		router.push('/search/filter?t=' + ft + '&' + s);
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
				<img src={logo.default.src} alt="뒤로가기 아이콘" />
			</button>
			{filter_btn_is_render && (
				<button
					onClick={filter_click ? filter_click : onClickFilter}
					style={{ position: 'absolute', right: 45, top: 0, left: 'unset' }}
				>
					<img
						style={{ height: 22 }}
						src={filter_icon.default.src}
						alt="필터 아이콘"
					/>
				</button>
			)}
			<button onClick={onClickAlert}>
				<img
					src={
						member?.push_count > 0
							? alarmMOn.default.src
							: alarmMOff.default.src
					}
					alt="알람 아이콘"
				/>
			</button>
		</header>
	);
});

export default MobileHeader;
