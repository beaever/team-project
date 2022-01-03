import { useRouter } from 'next/router';
import React from 'react';

interface FooterModel {
	now_location?: string;
}

const MobileFooter = (props: FooterModel) => {
	const router = useRouter();
	const { now_location } = props;

	const onClickGNB = (url: string) => {
		router.push(url);
	};
	return (
		<>
			<footer className="mobile_footer">
				<div
					onClick={() => onClickGNB('/')}
					className={now_location === 'home' ? 'active' : ''}
				>
					<img
						src={
							now_location === 'home'
								? '../icon/mobile-footer/main.png'
								: '../icon/mobile-footer/main_off.png'
						}
						alt="HOME-ICON"
					/>
					<br />홈
				</div>
				<div
					onClick={() => onClickGNB('/estimate')}
					className={now_location === 'estimate' ? 'active' : ''}
				>
					<img
						src={
							now_location === 'estimate'
								? '../icon/mobile-footer/estimate.png'
								: '../icon/mobile-footer/estimate_off.png'
						}
						alt=""
					/>
					<br />
					마켓
				</div>
				<div
					onClick={() => onClickGNB('/message')}
					className={now_location === 'message' ? 'active' : ''}
				>
					<img
						src={
							now_location === 'message'
								? '../icon/mobile-footer/message.png'
								: '../icon/mobile-footer/message_off.png'
						}
						alt="GNB 아이콘"
					/>
					<br />
					메세지
				</div>
				<div
					onClick={() => onClickGNB('/project')}
					className={now_location === 'project' ? 'active' : ''}
				>
					<img
						src={
							now_location === 'project'
								? '../icon/mobile-footer/project.png'
								: '../icon/mobile-footer/project_off.png'
						}
						alt=""
					/>
					<br />
					1:1문의
				</div>
				<div
					onClick={() => onClickGNB('/setting')}
					className={now_location === 'setting' ? 'active' : ''}
				>
					<img
						src={
							now_location === 'setting'
								? '../icon/mobile-footer/setting.png'
								: '../icon/mobile-footer/setting_off.png'
						}
						alt="GNB 아이콘"
					/>
					<br />
					설정
				</div>
			</footer>
		</>
	);
};

export default MobileFooter;
