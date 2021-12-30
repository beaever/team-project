import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import imageCompression from 'browser-image-compression';
import HeaderModel from '../models/componentModel/headerModel';
import Margin from '../components/margin';
import { profileImageUpload } from '../script/routeAPI';
import MemberModel from '../models/dataModel/memberModel';

const logo = require('../static/img/logo.png');
const alarmOn = require('../static/img/icons/alarm_on.png');
const alarmOff = require('../static/img/icons/alarm_off.png');
const Crown = require('../static/img/icons/crown.png');
const Pencil = require('../static/img/icons/pencil.png');
const Noprofile = require('../static/img/icons/noprofile.png');
const arrow_right_g = require('../static/img/icons/arrow_right_small_g.png');

const PcHeader = (props: HeaderModel) => {
	const router = useRouter();
	const [is_show, setIsShow] = useState<boolean>(false);

	const { member } = props;

	const logout = (member: MemberModel) => {
		props.logout(member);
	};

	const uploadImage = async (file) => {
		const _uploadImage = await profileImageUpload(member.idx, file);
		return _uploadImage.code === 200;
	};

	// Click
	// 프로필 이미지 변경
	const clickProfile = () => {
		document.getElementsByName('profile')[0].click();
	};

	const clickMenu = (movePage: string) => {
		if (!member?.idx) {
			alert('로그인이 필요한 서비스 입니다.');
			router.push('/login');
		} else {
			router.push(movePage);
		}
	};

	// Change
	const changeProfileFile = async (e: any) => {
		let file = e.target.files[0];
		const previewImage = document.getElementById(
			'profile_img',
		) as HTMLImageElement;

		if (!file.type.match('image.*')) {
			alert('이미지만 업로드가 가능합니다');
			return false;
		}

		const options = {
			maxSizeMB: 0.2,
			maxWidthOrHeight: 720,
			useWebWorker: true,
		};

		if (file.size / (1024 * 1024) > 8) {
			alert(
				'이미지가 너무 커 업로드가 제한되었습니다.\n8MB 미만으로 업로드해주세요.',
			);
			return false;
		}

		const compressedFile = await imageCompression(file, options);

		file = compressedFile;
		file = new File([file], file.name);

		if (!(await uploadImage(file))) {
			alert('이미지 파일이 올바르지 않습니다');
		} else {
			const reader = new FileReader();
			reader.onload = (d) => {
				previewImage.src = `${d.target.result}`;
				previewImage.alt = '프로필';
			};

			reader.readAsDataURL(file);
		}
	};

	return (
		<header className="pc_header">
			<Link href="/">
				<a className="logo floatL">
					<img src={logo.default.src} alt="" />
				</a>
			</Link>
			<ul className="top_menu left_menu floatL clearfix">
				<li
					className={router.pathname.indexOf('estimate') === 1 ? 'active' : ''}
					onClick={() => clickMenu('/estimate')}
				>
					<a>빠른견적</a>
				</li>
				<li
					className={router.pathname.indexOf('project') === 1 ? 'active' : ''}
					onClick={() => clickMenu('/project')}
				>
					<a>프로젝트</a>
				</li>
				<li
					className={router.pathname.indexOf('message') === 1 ? 'active' : ''}
					onClick={() => clickMenu('/message')}
				>
					<a>메시지</a>
				</li>
			</ul>

			<div className="top_menu right_menu floatR clearfix">
				{member && member.idx ? (
					<>
						<li>
							<Link href="/alert">
								<a>
									<img
										src={
											member.push_count > 0
												? alarmOn.default.src
												: alarmOff.default.src
										}
										alt="알람이미지"
									/>
								</a>
							</Link>
						</li>
						<li>
							<div className="line" />
						</li>
						<li>
							<Link href="#">
								<a onClick={() => setIsShow(!is_show)}>내정보</a>
							</Link>
						</li>
						<li>
							<div className="line" />
						</li>
						<li>
							<Link href="#">
								<a
									onClick={() => {
										logout(member);
									}}
								>
									로그아웃
								</a>
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link href="/login">로그인</Link>
						</li>
						<li>
							<div className="line" />
						</li>
						<li>
							<Link href="/join">회원가입</Link>
						</li>
					</>
				)}
			</div>

			{member && member.idx && (
				<div
					className={`aside ${is_show ? 'show' : ''}`}
					style={{ height: is_show ? 'auto' : 0 }}
				>
					<div className="profile-wrap">
						<div className="profile-img-wrap">
							<div className="profile-img-holder">
								<img
									src={
										member.profile
											? process.env.IMAGE_URL + member.profile
											: Noprofile.default.src
									}
									alt={member.profile ? '프로필' : '노프로필'}
									id="profile_img"
								/>
							</div>
							<input
								type="file"
								className="hidden"
								name="profile"
								onChange={changeProfileFile}
							/>
							<button className="pencil-img-holder" onClick={clickProfile}>
								<img src={Pencil.default.src} alt="프로필이미지수정아이콘" />
							</button>
						</div>
						<div className="text-wrap">
							<div className="name-wrap">
								{member.is_pro && (
									<div className="pro-icon-wrap clearfix">
										<div className="pro-img-holder">
											<img src={Crown.default.src} alt="프로아이콘" />
										</div>
										<span>Pro</span>
									</div>
								)}
								<div className="name-company">
									<span className="name">
										{member.name ? member.name : 'Apple 회원'}
									</span>
									{member.type === 'C' && member.company_name && (
										<>
											<div className="vertical-line"></div>
											<span className="company">{member.company_name}</span>
										</>
									)}
								</div>
							</div>
							<div className="email-wrap">
								<span>{member.email ? member.email : '비공개'}</span>
							</div>
						</div>
						{member.type !== 'C' && member.is_profile == false && (
							<>
								<Margin bottom={20} />
								<div className="btn-wrap">
									<button
										className="btn"
										onClick={() => router.push('/setting/profile')}
									>
										프로필 등록하러가기
									</button>
								</div>
							</>
						)}
					</div>
					<div className="list">
						{member.type !== 'C' && member.is_profile && (
							<>
								<Link href="/setting/profile">
									<a className="clearfix item">
										<span>프로필 관리</span>
										<img
											className="floatR"
											src={arrow_right_g.default.src}
											alt="화살표아이콘"
										/>
									</a>
								</Link>
								{!member?.is_pro && (
									<Link
										href={`/apply/pro/${
											member.type === 'M' ? 'model' : 'photo'
										}`}
									>
										<a className="clearfix item">
											<span>프로신청하기</span>
											<img
												className="floatR"
												src={arrow_right_g.default.src}
												alt="화살표아이콘"
											/>
										</a>
									</Link>
								)}

								<Link href={`/apply/calculate`}>
									<a className="clearfix item">
										<span>정산신청하기</span>
										<img
											className="floatR"
											src={arrow_right_g.default.src}
											alt="화살표아이콘"
										/>
									</a>
								</Link>
							</>
						)}
						<Link href="/setting/info">
							<a className="clearfix item">
								<span>계정정보 변경</span>
								<img
									className="floatR"
									src={arrow_right_g.default.src}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/history/payment">
							<a className="clearfix item">
								<span>결제내역</span>
								<img
									className="floatR"
									src={arrow_right_g.default.src}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/bookmark">
							<a className="clearfix item">
								<span>북마크</span>
								<img
									className="floatR"
									src={arrow_right_g.default.src}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/coupon">
							<a className="clearfix item">
								<span>쿠폰함</span>
								<img
									className="floatR"
									src={arrow_right_g.default.src}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
						<Link href="/inquiry">
							<a className="clearfix item">
								<span>1:1문의</span>
								<img
									className="floatR"
									src={arrow_right_g.default.src}
									alt="화살표아이콘"
								/>
							</a>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default PcHeader;
