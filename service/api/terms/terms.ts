import TermsRequestDataModel from './model/terms-requestDataModel';
import { BASE_URL, GET, JSON_HEADER, POST } from '../../../shared/api-constant';
import { AxiosRequestConfig } from '../config/axios';
import axios from 'axios';

export const terms = {
  termsInfo: (req: TermsRequestDataModel) => {
    const config: AxiosRequestConfig = {
      url: BASE_URL + `terms/name?`,
      method: GET,
      headers: {
        ...JSON_HEADER,
      },
      params: {
        name: req.name ?? '',
      },
    };
    return axios(config);
  },
};
