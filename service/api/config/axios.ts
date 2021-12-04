import axios, { AxiosRequestConfig as aq } from 'axios';
import { BASE_URL } from '../../../shared/api-constant';

const instance = axios.create({ baseURL: BASE_URL });

const onClear = () => {
	window.localStorage.clear();
};

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return err;
	},
);

instance.interceptors.response.use(
	(res) => {
		return res;
	},

	(err) => {
		return err;
	},
	// (res) => {
	//   const code = res.data.code
	//   if (code === 40003) {
	//     alert_manager.show({
	//       content: '로그인이 필요한 서비스 입니다.',
	//       onClick: () => {
	//         onClear()
	//         window.location.replace('/login')
	//       },
	//     })
	//   }
	//   return res
	// },
	// (err) => {
	//   return err
	// },
);

export type AxiosRequestConfig = aq;

export default instance;
