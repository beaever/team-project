export default interface UserMemberInfoResponseDataModel {
	code: number;
	msg: string;
	data: {
		name: string;
		number: string;
		gender: string;
		age: string;
		profile_img: string;
	};
}
