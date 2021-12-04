import axios from 'axios';
import { request } from 'http';
import { GET, JSON_HEADER, POST } from '../../../shared/api-constant';
import { AxiosRequestConfig } from '../config/axios';
import UserMemberInfoRequestDataModel from './model/user-member-info-request-data-model';

export const user = {
	// 회원의 개인 정보 가져오기 API
	memberInfo: (request: UserMemberInfoRequestDataModel) => {
		const config: AxiosRequestConfig = {
			url: 'url..',
			method: POST, // GET 방식이라면 GET , POST 방식이라면 POST ,
			headers: {
				...JSON_HEADER,
				// 토큰 값을 원한다면 Authorization: Beazie or  token,
			},
			//GET 방식이면
			//	params: {
			// API에서 요구하는 Request Params value
			//	},
			data: {
				// POST 방식에서 요구하는 Params value
				token: request.token ?? '',
			},
		};
		return axios(config);
	},
};
