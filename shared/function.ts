import { title } from 'process';

export const qs = (_: string): Element | null => {
	return document.querySelector(_) ?? null;
};

export const click = (selector: string): void => {
	if (document.querySelector(selector) === null) return;
	qs(selector)!.dispatchEvent(
		new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true,
			buttons: 1,
		}),
	);
};

// n 시간 데이터 ms 단위 데이터로 반환
export const getHour = (e: number): number => {
	return 1000 * 60 * 60 * e;
};

// 핸드폰 Format Function
export const phoneFormat = (_x: string): string => {
	var number = _x.replace(/-/gi, '');
	var tel = '';

	if (number.replace(/[ 0-9 | \- ]/g, '').length) {
		number = number.substr(0, number.length - 1);
	}

	if (number.length < 4) {
		return number;
	} else if (number.length < 7) {
		tel += number.substr(0, 3);
		tel += '-';
		tel += number.substr(3);
	} else if (number.length < 11) {
		tel += number.substr(0, 3);
		tel += '-';
		tel += number.substr(3, 3);
		tel += '-';
		tel += number.substr(6);
	} else {
		tel += number.substr(0, 3);
		tel += '-';
		tel += number.substr(3, 4);
		tel += '-';
		tel += number.substr(7);
	}

	return tel;
};

export const brithFormat = (b: string): string => {
	let birth = b.replace(/\s/gi, '');
	let formatBirth = '';

	formatBirth = birth.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');

	return formatBirth;
};

// <url query 가저오는 Function>
// export const getQuery = (any?: any) => {
//   let query_string = window.location.search;
//   query_string = query_string.replace('?', '');
//   const query_string_arr = query_string.split('&');
//   const query = {} as { [attr: string]: string | number };
//   for (let i = 0; i < query_string_arr.length; i++) {
//     const key_value_str = query_string_arr[i];
//     const key_value_arr = key_value_str.split('=');
//     if (key_value_arr.length === 2) {
//       query[key_value_arr[0]] = key_value_arr[1] ? key_value_arr[1] : '';
//     }
//   }

//   return query;
// };

// export const queryToString = (query: { [attr: string]: string | number }) => {
//   const attrs = Object.keys(query);
//   let tmp = '';
//   for (let i = 0; i < attrs.length; i++) {
//     if (i === 0) {
//       tmp += '?';
//     }

//     tmp += attrs[i];
//     tmp += '=';
//     tmp += query[attrs[i]];

//     if (i !== attrs.length - 1) {
//       tmp += '&';
//     }
//   }
//   return tmp;
// };

// image-crop Function // => (react-image-crop lib)
export const resizeBase64 = (base64: string) => {
	return new Promise((resolve, reject) => {
		const MAX_WIDTH = 433;
		const MAX_HEIGHT = 433;

		const canvas_origin = document.createElement('canvas');
		const canvas_resize = document.createElement('canvas');
		const canvas_origin_context = canvas_origin.getContext('2d');
		const canvas_resize_context = canvas_resize.getContext('2d');

		const img = new Image();

		img.onload = function () {
			let ratio = 1;

			const is_vertical_picture = img.height > img.width;

			if (is_vertical_picture && img.height > MAX_HEIGHT) {
				ratio = MAX_HEIGHT / img.height;
			}

			if (!is_vertical_picture && img.width > MAX_WIDTH) {
				ratio = MAX_WIDTH / img.width;
			}

			canvas_origin.width = img.width;
			canvas_origin.height = img.height;
			canvas_origin_context.drawImage(img, 0, 0);

			canvas_resize.width = img.width * ratio;
			canvas_resize.height = img.height * ratio;

			canvas_resize_context.drawImage(
				canvas_origin,
				0,
				0,
				canvas_origin.width,
				canvas_origin.height,
				0,
				0,
				canvas_resize.width,
				canvas_resize.height,
			);

			resolve(canvas_resize.toDataURL());
		};

		img.src = base64;
	});
};

export const rotateBase64 = (
	base64: string,
	degree: number,
): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		while (degree < 0) {
			degree += 360;
		}

		if (degree % 90 !== 0) reject('degree단위는 90도만 가능합니다.');

		const count = degree / 90;

		let src = base64;

		for (let i = 0; i < count; i++) {
			src = await rorateImage(src);
		}

		resolve(src);
	});
};

function rorateImage(base64: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = function () {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			document.body.appendChild(canvas);

			const width = image.height;
			const height = image.width;

			context.save();
			canvas.width = width;
			canvas.height = height;
			context.translate(width / 2, height / 2);
			context.rotate(Math.PI / 2);

			context.drawImage(image, -(height / 2), -(width / 2));
			context.restore();

			resolve(canvas.toDataURL());
			document.body.removeChild(canvas);
		};

		image.src = base64;
	});
}

export const numberFormat = (num: number): string => {
	return num < 10 ? `0${num}` : `${num}`;
};

export const monthFormat = (m: number): string => {
	return m === 1
		? '1월'
		: m === 2
		? '2월'
		: m === 3
		? '3월'
		: m === 4
		? '4월'
		: m === 5
		? '5월'
		: m === 6
		? '6월'
		: m === 7
		? '7월'
		: m === 8
		? '8월'
		: m === 9
		? '9월'
		: m === 10
		? '10월'
		: m === 11
		? '11월'
		: '12월';
};

export const termsTitle = (title: string) => {
	switch (title) {
		case '1':
			return '이용약관';
		case '2':
			return '개인정보처리방침';
		default:
			return 'NOT FOUND PAGE';
	}
};

export const termsText = (title: string) => {
	switch (title) {
		case '1':
			return "<strong>제 1 조 (목적)</strong>	<br />주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별 서비스에 모두	접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '카카오계정 			약관(이하 '본 약관')을 마련하였습니다. 본 약관은 여러분이 			카카오계정 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 			이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 			시간을 내서 주의 깊게 읽어주시기 바랍니다. <br/><strong>제 2 조 (약관의 효력 및 변경)</strong> 			<br /> 			①본 약관의 내용은 카카오계정 웹사이트 또는 개별 서비스의 화면에 			게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 여러분 			모두에게 그 효력이 발생합니다. ②회사는 필요한 경우 관련법령을 			위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 본 약관이 			변경되는 경우 회사는 변경사항을 시행일자 15일 전부터 여러분에게 			서비스 공지사항에서 공지 또는 통지하는 것을 원칙으로 하며, 피치 			못하게 여러분에게 불리한 내용으로 변경할 경우에는 그 시행일자 30일 			전부터 카카오계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 			경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 			별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 			카카오톡 메시지 또는 문자메시지 발송하는 방법 등으로 개별적으로 			알려 드리겠습니다. ③회사가 전항에 따라 공지 또는 통지를 하면서 			공지 또는 통지일로부터 개정약관 시행일 7일 후까지 거부의사를 			표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 			고지하였음에도 여러분의 의사표시가 없는 경우에는 변경된 약관을 			승인한 것으로 봅니다. 여러분이 개정약관에 동의하지 않을 경우 			여러분은 이용계약을 해지할 수 있습니다. 			<br /> 			<strong>제 3 조 (약관 외 준칙)</strong> 			<br /> 			본 약관에 규정되지 않은 사항에 대해서는 관련법령 또는 회사가 정한 			개별 서비스의 이용약관, 운영정책 및 규칙 등(이하 ‘세부지침’)의 			규정에 따릅니다. 			<br /> 			<strong>제 4 조 (용어의 정의)</strong> 			<br /> 			①본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1.카카오계정: 			회사 또는 관계사가 제공하는 개별 서비스를 하나의 로그인계정과 			비밀번호로 회원 인증, 회원정보 변경, 회원 가입 및 탈퇴 등을 관리할 			수 있도록 회사가 정한 로그인계정 정책을 말합니다. 2.회원: 			카카오계정이 적용된 개별 서비스 또는 카카오계정 웹사이트에서 본 			약관에 동의하고, 카카오계정을 이용하는 자를 말합니다. 3.관계사: 			회사와 제휴 관계를 맺고 카카오계정을 공동 제공하기로 합의한 법인을 			말합니다. 개별 관계사는 카카오 기업사이트에서 확인할 수 있고 추후 			추가/변동될 수 있으며 관계사가 추가/변동될 때에는 카카오 			기업사이트에 변경 사항을 게시합니다. 4.개별 서비스: 카카오계정을 			이용하여 접속 가능한 회사 또는 관계사가 제공하는 서비스를 			말합니다. 개별 서비스는 추후 추가/변동될 수 있으며 서비스가 			추가/변동될 때에는 카카오 기업사이트에 변경 사항을 게시합니다. 			5.카카오계정 웹사이트: 회원이 온라인을 통해 카카오계정 정보를 조회 			및 수정할 수 있는 인터넷 사이트를 말합니다. 6.카카오계정 정보 : 			카카오계정을 이용하기 위해 회사가 정한 필수 내지 선택 입력 			정보로서 카카오계정 웹사이트 또는 개별 서비스 내 카카오계정 설정 			화면을 통해 정보 확인, 변경 처리 등을 관리할 수 있는 회원정보 			항목을 말합니다. 7.카카오콘 : 회사가 회원의 개별 서비스 이용 			과정에서 지급하는 혜택으로서 회원은 회사가 정한 방법에 따라서 			카카오콘을 사용할 수 있습니다. 8.인증서 : 인증서라 함은 회사가 			인증서비스를 통하여 발급하는 전자서명생성정보가 회원에게 유일하게 			속한다는 사실 등을 확인하고 이를 증명하는 전자적 정보를 말합니다. 			9.전자서명 : 서명자의 신원을 확인하고 서명자가 해당 전자문서에 			서명하였다는 사실을 나타내는데 이용하기 위하여 전자문서에 			첨부되거나 논리적으로 결합된 전자적 형태의 정보를 말합니다. 			10.전자서명생성정보 : 전자서명을 생성하기 위하여 이용하는 전자적 			정보를 말합니다. 11.인증회원 : 회사로부터 전자서명생성정보를 인증 			받은 회원을 말합니다. 12.이용기관 : 인증회원의 전자서명 및 			인증서를 바탕으로 한 거래 등을 위하여 인증서비스를 이용하려는 			제3자를 말합니다. 제 2 장 카카오계정 이용계약 제 5 조 (계약의 			성립) ①카카오계정 이용 신청은 개별 서비스 또는 카카오계정 웹사이트 			회원가입 화면에서 여러분이 카카오계정 정보에 일정 정보를 입력하는 			방식으로 이루어집니다. ②카카오계정 이용계약은 여러분이 본 약관의 			내용에 동의한 후 본 조 제1항에서 정한 이용신청을 하면 회사가 			입력된 일정 정보를 인증한 후 가입을 승낙함으로써 체결됩니다. 제 6 			조 (카카오계정 이용의 제한) ①제5조에 따른 가입 신청자에게 회사는 			원칙적으로 카카오계정의 이용을 승낙합니다. 다만, 회사는 아래 각 			호의 경우에는 그 사유가 해소될 때까지 승낙을 유보하거나 승낙하지 			않을 수 있습니다. 특히, 여러분이 만 14세 미만인 경우에는 부모님 등 			법정대리인의 동의가 있는 경우에만 카카오계정을 생성할 수 			있습니다.에서 1대의 기기에만 발급됩니다. 만일 인증회원이 다른 기기 			또는 다른 카카오계정에서 인증서를 재발급하는 경우 기존에 발급받은 			인증서는 자동 폐지됩니다. ③인증회원은 회사가 정한 방법에 따라 			인증서비스를 이용하여야 합니다. 또한 인증회원은 자신의 			전자서명생성정보와 인증서 및 이와 관련된 모든 정보를 안전하게 			관리하고 인증서비스 이용 기간 중 회사에 제공한 정보 및 인증서에 			포함된 정보가 정확하고 완전하게 유지되도록 하여야 합니다. 			인증회원은 자신의 전자서명생성정보와 인증서 및 이에 관련된 정보를 			타인에게 양도, 증여, 판매, 사용 허락할 수 없으며, 분실, 훼손, 도난 			또는 유출되거나 그러할 위험이 있다고 인지한 경우 즉시 그 사실을 			회사에 통지하여야 합니다. ④회사는 다음 각 호의 경우 인증서의 신청 			및 발급을 제한하거나 발급된 인증서를 인증회원의 동의없이 폐지할 수 			있습니다. 1.피성년후견인 또는 피한정후견인이 법정대리인의 동의 			없이 가입한 경우 2.타인 명의의 신청 및 정보 도용 등 신청 내용이 			허위의 사실이라 판단되는 경우 3.회사가 제시하는 인증 절차를 			완료하지 못하거나, 회사가 정하지 않은 비정상적인 방법으로 시스템에 			접근하여 인증서비스에 가입하는 경우 4.회사로부터 이용 정지를 			당하거나, 법령 또는 본 약관을 위반하는 등의 이유로 서비스 이용 			계약이 해지된 회원이 재이용신청을 하는 경우 5.기타 회원의 			귀책사유로 발급이 곤란한 경우 또는 회사가 정한 이용신청 요건이 			충족되지 않은 경우 ⑤인증회원은 인증서비스를 자유롭게 이용할 수 			있으나, 아래 각 호의 행위는 하여서는 안 됩니다. 1.회사가 정하지 			않은 비정상적인 방법으로 시스템에 접근하거나 인증서비스를 이용하는 			행위 2.부정한 방법으로 인증서를 발급받거나 행사하는 등 		인증서비스를 불법적 또는 부당한 용도로 사용하는 행위";
		case '2':
			return '개인정보처리방침 ...';
		default:
			return '404 NOT FOUND PAGE';
	}
};
